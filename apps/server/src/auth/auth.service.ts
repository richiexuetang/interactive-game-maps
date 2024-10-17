import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { CookieOptions, Response } from "express";

import { User } from "@prisma/client";
import { Token } from "./models/token.model";

import { GoogleUser } from "./interfaces/auth.interface";
import { PrismaService } from "src/common/prisma.service";
import { SecurityConfig } from "src/common/configs/config.interface";

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) {}

  validateUser(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
  }

  async signInWithGoogle(
    user: GoogleUser,
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

  private async registerGoogleUser(res: Response, user: GoogleUser) {
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

  generateTokens(payload: { userId: string }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { userId: string }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_SECRET"),
      expiresIn: securityConfig.refreshIn,
    });
  }

  getUserFromToken(token: string): Promise<User> {
    console.log("token", token);
    const id = this.jwtService.decode(token)["userId"];
    return this.prismaService.user.findUnique({ where: { id } });
  }
}
