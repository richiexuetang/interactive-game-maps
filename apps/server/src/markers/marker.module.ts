import { Module } from "@nestjs/common";
import { MarkerLocationsResolver } from "./marker-location.resolver";
import { MarkerGroupsResolver } from "./marker-group.resolver";
import { MarkerCategoriesResolver } from "./marker-category.resolver";

@Module({
  imports: [],
  providers: [
    MarkerLocationsResolver,
    MarkerGroupsResolver,
    MarkerCategoriesResolver,
  ],
})
export class MarkersModule {}
