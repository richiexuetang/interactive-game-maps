import { Module } from "@nestjs/common";
import { MarkerLocationsResolver } from "./marker-location.resolver";

@Module({
  imports: [],
  providers: [MarkerLocationsResolver],
})
export class MarkersModule {}
