import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { StrategiesEnum } from "../constants/strategies.constants";

@Injectable()
export class JwtGuard extends AuthGuard(StrategiesEnum.JWT) {}
