import { PrismaService } from "nestjs-prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findUserByEmail(email: string) {
    const user = this.prisma.user.findUnique({
      where: { email },
      include: { noteMarkers: true, foundMarkers: true },
    });
    return user;
  }
}
