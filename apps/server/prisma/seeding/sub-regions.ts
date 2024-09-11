// name           String
// latitude       Decimal
// longitude      Decimal
// parentRegion   Region? @relation(fields: [parentRegionId], references: [id])
// parentRegionId Int?
export const subRegions = [
  {
    name: "Ancient Guanyin Temple",
    latitude: 1,
    longitude: 1,
    parentRegionId: 1,
  },
];
