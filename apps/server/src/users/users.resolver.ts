import { Resolver, Mutation, Args, Subscription, Query } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UpdateFoundLocationInput } from "./dto/update-found-location.input";
import { UpdateHideFoundInput } from "./dto/update-hide-found.input";
import { AddNoteInput } from "./dto/add-note.input";
import { RemoveNoteInput } from "./dto/remove-note.input";
import { UpdateNoteInput } from "./dto/update-note.input";
import { NoteMarker } from "./models/note-marker.model";
import { PubSub } from "graphql-subscriptions";
import { AddFavoriteInput } from "./dto/add-favorite.input";
import { PrismaService } from "../common/prisma.service";
import { UserEntity } from "../auth/decorators/user.decorator";
import { GqlAuthGuard } from "../auth/guards/gql-auth.guard";
import { UseGuards } from "@nestjs/common";

const pubSub = new PubSub();

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Subscription((returns) => NoteMarker, {
    name: "noteMarkerAdded",
  })
  subscribeToNoteMarkerAdded() {
    return pubSub.asyncIterator("noteMarkerAdded");
  }

  @Mutation(() => NoteMarker)
  async addNoteMarker(@Args("data") data: AddNoteInput) {
    const { email, mapSlug, ...noteData } = data;

    const marker = await this.prisma.noteMarker.create({
      data: {
        ...noteData,
        map: { connect: { slug: mapSlug } },
        user: { connect: { email } },
      },
    });
    // pubSub.publish("noteMarkerAdded", { commentAdded: marker });
    return marker;
  }

  @Mutation(() => User)
  async removeNoteMarker(@Args("data") data: RemoveNoteInput) {
    const { id, email } = data;
    await this.prisma.noteMarker.delete({ where: { id } });
    return await this.prisma.user.findUnique({ where: { email } });
  }

  @Mutation(() => User)
  async addFavorite(@Args("data") data: AddFavoriteInput) {
    const { email, gameSlug } = data;

    return await this.prisma.user.update({
      where: { email },
      data: {
        favoriteMaps: {
          connect: { slug: gameSlug },
        },
      },
      include: { favoriteMaps: true },
    });
  }

  @Mutation(() => User)
  async removeFavorite(@Args("data") data: AddFavoriteInput) {
    const { email, gameSlug } = data;

    return await this.prisma.user.update({
      where: { email },
      data: {
        favoriteMaps: {
          disconnect: { slug: gameSlug },
        },
      },
      include: { favoriteMaps: true },
    });
  }

  @Mutation(() => NoteMarker)
  async updateNoteMarker(@Args("data") data: UpdateNoteInput) {
    const { id, ...markerData } = data;

    await this.prisma.noteMarker.update({
      where: { id },
      data: {
        ...markerData,
      },
    });
    return this.prisma.noteMarker.findUnique({ where: { id } });
  }

  @Mutation(() => User)
  async toggleHideFoundSetting(@Args("data") data: UpdateHideFoundInput) {
    return await this.prisma.user.update({
      data: { hideFound: data.hide },
      where: {
        email: data.email,
      },
    });
  }

  @Mutation(() => User)
  async addFoundLocation(@Args("data") data: UpdateFoundLocationInput) {
    const { email, location } = data;
    const existingLocation = await this.prisma.location.findUnique({
      where: { id: location },
    });

    const newLocation = {
      create: { ...existingLocation },
      where: { id: location },
    };

    return await this.prisma.user.upsert({
      where: { email },
      create: {
        email,
        foundMarkers: {
          connectOrCreate: newLocation,
        },
      },
      update: {
        foundMarkers: {
          connectOrCreate: newLocation,
        },
      },
      include: { foundMarkers: true },
    });
  }

  @Mutation(() => User)
  async removeFoundLocation(@Args("data") data: UpdateFoundLocationInput) {
    const user = await await this.prisma.user.findUnique({
      where: { email: data.email },
      include: { foundMarkers: true },
    });

    return await this.prisma.user.update({
      where: {
        email: data.email,
      },
      data: {
        foundMarkers: {
          set: user.foundMarkers.filter(
            (location) => location.id !== data.location
          ),
        },
      },
      include: { foundMarkers: true },
    });
  }
}
