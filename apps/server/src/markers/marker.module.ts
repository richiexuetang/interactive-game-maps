import { Module } from "@nestjs/common";
import { MarkerLocationsResolver } from "./marker-location.resolver";
import { MarkerGroupsResolver } from "./marker-group.resolver";

@Module({
  imports: [],
  providers: [MarkerLocationsResolver, MarkerGroupsResolver],
})
export class MarkersModule {}
