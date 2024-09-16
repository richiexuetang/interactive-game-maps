import { PrismaClient } from "@prisma/client";
import { games } from "./seeding/games";
import { regions } from "./seeding/region";
import { markerGroups } from "./seeding/marker-group";
import { categoryLocations } from "./seeding/categories";
import { textLocations } from "./seeding/categories";

const prisma = new PrismaClient();

async function main() {
  await prisma.media.deleteMany({});
  await prisma.markerLocation.deleteMany({});
  await prisma.markerCategory.deleteMany({});
  await prisma.markerGroup.deleteMany({});
  await prisma.region.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.appUser.deleteMany({});

  await prisma.game.createMany({ data: games });

  await prisma.region.createMany({ data: regions });

  await prisma.markerGroup.createMany({ data: markerGroups });

  await prisma.markerLocation.createMany({ data: textLocations });

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
