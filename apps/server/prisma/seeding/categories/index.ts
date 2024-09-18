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
