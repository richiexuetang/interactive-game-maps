import { Module } from "@nestjs/common";
import { MapsResolver } from "./maps.resolver";

@Module({
  imports: [],
  providers: [MapsResolver],
})
export class MapsModule {}
