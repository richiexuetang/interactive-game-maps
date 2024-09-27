import { PrismaService } from "nestjs-prisma";
import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";

@Injectable()
export class AppUsersService {
  constructor(private prisma: PrismaService) {}

  createUser(newUserData: CreateUserInput) {
    return this.prisma.appUser.create({
      data: { ...newUserData, foundLocations: [] },
    });
  }

  findUserByEmail(email: string) {
    const user = this.prisma.appUser.findUnique({
      where: { email },
      include: { noteMarkers: true },
    });
    return user;
  }
}
