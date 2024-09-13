import { Module } from "@nestjs/common";
import { AppUsersResolver } from "./app-users.resolver";
import { AppUsersService } from "./app-users.service";

@Module({
  imports: [],
  providers: [AppUsersResolver, AppUsersService],
})
export class AppUsersModule {}
