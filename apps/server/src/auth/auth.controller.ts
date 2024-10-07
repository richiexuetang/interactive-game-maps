import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { GoogleOAuthGuard } from "./guards/google-oauth.guard";
import { JwtGuard } from "./guards/jwt-auth.guard";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GoogleOAuthGuard)
  @Get("google")
  async googleAuth(@Req() req) {}

  @UseGuards(GoogleOAuthGuard)
  @Get("google-auth-redirect")
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const { encodedUser } = await this.authService.signInWithGoogle(
      req.user,
      res
    );
    return res.redirect(
      `${process.env.GOOGLE_REDIRECT_URL_CLIENT_REACT}?jwtUser=${encodedUser}`
    );
  }
}
