import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CookieOptions, Response } from "express";

import { User } from "@prisma/client";

import { PrismaService } from "src/common/prisma.service";
import { GoogleUserDto } from "./dto/google-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) {}

  validateUser(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async signInWithGoogle(
    user: GoogleUserDto,
    res: Response
  ): Promise<{
    encodedUser: string;
  }> {
    if (!user) throw new BadRequestException("Unauthenticated");

    const existingUser = await this.findUserByEmail(user.email);

    if (!existingUser) return this.registerGoogleUser(res, user);

    const encodedUser = this.encodeUserDataAsJwt(existingUser);

    this.setJwtTokenToCookies(res, existingUser);

    return {
      encodedUser,
    };
  }

  private async findUserByEmail(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: { email },
      include: { noteMarkers: true, foundMarkers: true, favoriteMaps: true },
    });

    if (!user) return null;
    return user;
  }

  private async registerGoogleUser(res: Response, user: GoogleUserDto) {
    try {
      const fullName =
        !user.firstName && !user.lastName
          ? user.email
          : `${user.lastName || ""} ${user.firstName || ""}`.trim();

      const newUser = await this.prismaService.user.create({
        data: {
          email: user.email,
          username: fullName,
          picture: user.picture,
        },
        include: { noteMarkers: true, foundMarkers: true, favoriteMaps: true },
      });

      const encodedUser = this.encodeUserDataAsJwt(newUser);

      this.setJwtTokenToCookies(res, newUser);

      return {
        encodedUser,
      };
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  private encodeUserDataAsJwt(user: User) {
    const { password, ...userData } = user;

    return this.jwtService.sign(userData);
  }

  setJwtTokenToCookies(res: Response, user: User) {
    const expirationDateInMilliseconds =
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const cookieOptions: CookieOptions = {
      httpOnly: false,
      expires: new Date(expirationDateInMilliseconds),
    };

    res.cookie(
      "jwt",
      this.jwtService.sign({
        id: user.id,
        sub: {
          email: user.email,
        },
      }),
      cookieOptions
    );
  }
}
