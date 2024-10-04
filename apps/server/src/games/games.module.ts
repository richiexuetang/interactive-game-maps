import { Module } from "@nestjs/common";
import { GamesResolver } from "./games.resolver";

@Module({
  imports: [],
  providers: [GamesResolver],
})
export class GamesModule {}
