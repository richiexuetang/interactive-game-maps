import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";
import { AuthService } from "../auth.service";
import { JwtDto } from "../dtos/jwt.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get("JWT_SECRET"),
    });
  }

  async validate(payload: JwtDto): Promise<User> {
    console.log("payload", payload);
    const user = await this.authService.validateUser(payload.sub.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
