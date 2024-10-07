import { Module } from "@nestjs/common";
import { MarkersResolver } from "./markers.resolver";

@Module({
  imports: [],
  providers: [MarkersResolver],
})
export class MarkersModule {}
