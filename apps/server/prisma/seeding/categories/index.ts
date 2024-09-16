import { LocationType } from "@prisma/client";
import { bmwCategoryLocations } from "./bmw";
import { eldenRingCategoryLocations } from "./elden-ring";
import { CategoryLocation } from "./interface";
import { totkCategoryLocations } from "./totk";
import { witcherCategoryLocations } from "./witcher";

export const categoryLocations: CategoryLocation[] = [
  ...bmwCategoryLocations,
  // ...eldenRingCategoryLocations,
  // ...totkCategoryLocations,
  // ...witcherCategoryLocations,
];

export const textLocations = [
  {
    regionSlug: "chapter-1",
    title: "Ancient Guanyin Temple",
    latitude: "0.88748241485041",
    longitude: "-0.74017861950489",
    type: LocationType.Text,
  },
];
