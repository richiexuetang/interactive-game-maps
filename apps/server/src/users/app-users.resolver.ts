import { PrismaService } from "nestjs-prisma";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AppUser } from "./models/app-user.model";
import { AppUsersService } from "./app-users.service";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateFoundLocationInput } from "./dto/update-found-location.input";
import { UpdateHideFoundInput } from "./dto/update-hide-found.input";
import { AddNoteInput } from "./dto/add-note.input";
import { RemoveNoteInput } from "./dto/remove-note.input";

@Resolver(() => AppUser)
export class AppUsersResolver {
  constructor(
    private usersService: AppUsersService,
    private prisma: PrismaService
  ) {}

  @Mutation(() => AppUser, { nullable: true })
  async createUser(@Args("data") newUserData: CreateUserInput) {
    const existingUser = await this.prisma.appUser.findUnique({
      where: { email: newUserData.email },
    });
    if (existingUser) {
      return null;
    }

    return this.usersService.createUser(newUserData);
  }

  @Query(() => AppUser)
  async getUser(@Args("email") email: string) {
    return this.prisma.appUser.findUnique({
      where: { email },
      include: { noteMarkers: true },
    });
  }

  @Mutation(() => AppUser)
  async addNoteMarker(@Args("data") data: AddNoteInput) {
    const { email, ...noteData } = data;

    await this.prisma.noteMarker.create({
      data: {
        ...noteData,
        user: { connect: { email } },
      },
    });
    return await this.usersService.findUserByEmail(data.email);
  }

  @Mutation(() => AppUser)
  async removeNoteMarker(@Args("data") data: RemoveNoteInput) {
    await this.prisma.noteMarker.delete({ where: { id: data.id } });
    return await this.usersService.findUserByEmail(data.email);
  }

  @Mutation(() => AppUser)
  async addFoundLocations(@Args("data") data: UpdateFoundLocationInput) {
    const user = await this.usersService.findUserByEmail(data.email);
    const locations = user.foundLocations;
    const newLocations = [...locations, data.location];
    return await this.prisma.appUser.update({
      data: { foundLocations: newLocations },
      where: {
        email: data.email,
      },
    });
  }

  @Mutation(() => AppUser)
  async toggleHideFoundSetting(@Args("data") data: UpdateHideFoundInput) {
    return await this.prisma.appUser.update({
      data: { hideFound: data.hide },
      where: {
        email: data.email,
      },
    });
  }

  @Mutation(() => AppUser)
  async removeFoundLocation(@Args("data") data: UpdateFoundLocationInput) {
    const user = await this.usersService.findUserByEmail(data.email);
    const locations = user.foundLocations;
    const newLocations = locations.filter(
      (location) => location !== data.location
    );
    return await this.prisma.appUser.update({
      data: { foundLocations: newLocations },
      where: {
        email: data.email,
      },
    });
  }
}
