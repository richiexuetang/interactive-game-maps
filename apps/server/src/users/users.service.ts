import { PrismaService } from "nestjs-prisma";
import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createUser(newUserData: CreateUserInput) {
    return this.prisma.user.create({
      data: { ...newUserData, foundLocations: [], hideFound: false },
    });
  }

  findUserByEmail(email: string) {
    const user = this.prisma.user.findUnique({
      where: { email },
      include: { noteMarkers: true },
    });
    return user;
  }
}
