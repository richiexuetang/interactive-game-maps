import { PrismaService } from "nestjs-prisma";
import { Resolver, Query, Mutation, Args, Subscription } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UsersService } from "./users.service";
import { UpdateFoundLocationInput } from "./dto/update-found-location.input";
import { UpdateHideFoundInput } from "./dto/update-hide-found.input";
import { AddNoteInput } from "./dto/add-note.input";
import { RemoveNoteInput } from "./dto/remove-note.input";
import { UpdateNoteInput } from "./dto/update-note.input";
import { NoteMarker } from "./models/note-marker.model";
import { UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guards/jwt-auth.guard";
import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}

  @Subscription((returns) => NoteMarker, {
    name: "noteMarkerAdded",
  })
  subscribeToNoteMarkerAdded() {
    return pubSub.asyncIterator("noteMarkerAdded");
  }

  @UseGuards(JwtGuard)
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
    return await this.usersService.findUserByEmail(email);
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
    const user = await this.usersService.findUserByEmail(data.email);

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
