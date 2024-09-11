import { PrismaClient } from "@prisma/client";
import { games } from "./seeding/games";
import { regions } from "./seeding/region";
import { markerGroups } from "./seeding/marker-group";
import { markerCategories } from "./seeding/marker-category";

const prisma = new PrismaClient();

async function main() {
  await prisma.media.deleteMany({});
  await prisma.markerLocation.deleteMany({});
  await prisma.markerCategory.deleteMany({});
  await prisma.markerGroup.deleteMany({});
  await prisma.region.deleteMany({});
  await prisma.game.deleteMany({});

  console.log("Seeding Games...");

  await prisma.game.createMany({ data: games });

  console.log("Seeding Regions...");

  await prisma.region.createMany({ data: regions });

  console.log("Seeding Marker Groups...");

  await prisma.markerGroup.createMany({ data: markerGroups });

  console.log("Seeding Marker Categories...");

  for (let i = 0; i < markerCategories.length; i++) {
    const category = markerCategories[i];
    const { locations, ...rest } = category;
    const icon = markerCategories[i].title?.toLowerCase().replaceAll(" ", "_");
    const newCategory = await prisma.markerCategory.create({
      data: { ...rest, icon: icon, template: "", info: "" },
    });

    for (let j = 0; j < locations.length; j++) {
      // @ts-ignore
      const { media, ...rest } = locations[j];
      if (newCategory?.id) {
        const newLocation = await prisma.markerLocation.create({
          // @ts-ignore
          data: { ...rest, media: {}, categoryId: newCategory.id },
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

  console.log("Seeding Marker Locations...");

  // for (let i = 0; i < locations.length; i++) {
  //   const { categoryTitle, regionSlug, media = [], ...rest } = locations[i];

  //   const cats = await prisma.markerCategory.findFirst({
  //     where: { title: categoryTitle },
  //   });
  //   if (!cats) {
  //     console.log("Category does not exist for:", categoryTitle);
  //   }
  //   const newLocation = await prisma.markerLocation.create({
  //     data: { ...rest, regionSlug, media: {}, categoryId: cats.id },
  //   });
  //   if (media.length) {
  //     for (let j = 0; j < media.length; j++) {
  //       await prisma.media.create({
  //         data: { ...media[j], markerLocationId: newLocation.id },
  //       });
  //     }
  //   }
  // }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
