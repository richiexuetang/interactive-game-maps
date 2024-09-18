import { subRegions } from "./seeding/sub-regions";
import { PrismaClient } from "@prisma/client";
import { games } from "./seeding/games";
import { regions } from "./seeding/region";
import { markerGroups } from "./seeding/marker-group";
import { categoryLocations } from "./seeding/categories";

const prisma = new PrismaClient();

async function main() {
  await prisma.subRegion.deleteMany({});
  await prisma.media.deleteMany({});
  await prisma.markerLocation.deleteMany({});
  await prisma.markerCategory.deleteMany({});
  await prisma.markerGroup.deleteMany({});
  await prisma.region.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.appUser.deleteMany({});

  await prisma.game.createMany({ data: games });

  await prisma.region.createMany({ data: regions });

  for (let i = 0; i < subRegions.length; i++) {
    const subRegion = subRegions[i];
    const coordinatesString = subRegion.coordinates
      .map((coord: any) => coord.join(" "))
      .join(", ");
    const coord = `POLYGON((${coordinatesString}))`;
    await prisma.$queryRaw`
              INSERT INTO "SubRegion" (coordinates, title, "regionSlug")
              VALUES (ST_GeomFromText(${coord},4326), ${subRegion.title}, ${subRegion.regionSlug})
            `;
  }

  await prisma.markerGroup.createMany({ data: markerGroups });

  for (let i = 0; i < categoryLocations.length; i++) {
    const category = categoryLocations[i];
    const { locations, ...rest } = category;
    const icon = categoryLocations[i].title?.toLowerCase().replaceAll(" ", "_");
    const newCategory = await prisma.markerCategory.create({
      data: { ...rest, icon: icon },
    });

    for (let j = 0; j < locations.length; j++) {
      const { media, ...rest } = locations[j];
      if (newCategory?.id) {
        const newLocation = await prisma.markerLocation.create({
          data: {
            ...rest,
            media: {},
            categoryId: newCategory.id,
          },
        });
        if (media?.length) {
          for (let k = 0; k < media.length; k++) {
            await prisma.media.create({
              data: { ...media[k], markerLocationId: newLocation.id },
            });
          }
        }
      }
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
