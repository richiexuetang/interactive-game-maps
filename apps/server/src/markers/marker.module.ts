import { Module } from "@nestjs/common";
import { LocationsResolver } from "./marker-location.resolver";
import { GroupsResolver } from "./marker-group.resolver";

@Module({
  imports: [],
  providers: [LocationsResolver, GroupsResolver],
})
export class MarkersModule {}
