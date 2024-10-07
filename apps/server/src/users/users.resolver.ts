import { PrismaService } from "nestjs-prisma";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { User } from "./models/app-user.model";
import { UsersService } from "./users.service";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateFoundLocationInput } from "./dto/update-found-location.input";
import { UpdateHideFoundInput } from "./dto/update-hide-found.input";
import { AddNoteInput } from "./dto/add-note.input";
import { RemoveNoteInput } from "./dto/remove-note.input";
import { UpdateNoteInput } from "./dto/update-note.input";
import { NoteMarker } from "./models/note-marker.model";

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}

  @Mutation(() => User, { nullable: true })
  async createUser(@Args("data") newUserData: CreateUserInput) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: newUserData.email },
    });
    if (existingUser) {
      return null;
    }

    return this.usersService.createUser(newUserData);
  }

  @Query(() => User)
  async getUser(@Args("email") email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { noteMarkers: true },
    });
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

    return marker;
  }

  @Mutation(() => User)
  async removeNoteMarker(@Args("data") data: RemoveNoteInput) {
    await this.prisma.noteMarker.delete({ where: { id: data.id } });
    return await this.usersService.findUserByEmail(data.email);
  }

  @Mutation(() => NoteMarker)
  async updateNoteMarker(@Args("data") data: UpdateNoteInput) {
    await this.prisma.noteMarker.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
      },
    });
    return this.prisma.noteMarker.findUnique({ where: { id: data.id } });
  }

  @Mutation(() => User)
  async addFoundLocations(@Args("data") data: UpdateFoundLocationInput) {
    const user = await this.usersService.findUserByEmail(data.email);
    const locations = user.foundLocations;
    const newLocations = [...locations, data.location];
    return await this.prisma.user.update({
      data: { foundLocations: newLocations },
      where: {
        email: data.email,
      },
    });
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
  async removeFoundLocation(@Args("data") data: UpdateFoundLocationInput) {
    const user = await this.usersService.findUserByEmail(data.email);
    const locations = user.foundLocations;
    const newLocations = locations.filter(
      (location) => location !== data.location
    );
    return await this.prisma.user.update({
      data: { foundLocations: newLocations },
      where: {
        email: data.email,
      },
    });
  }
}