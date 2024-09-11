import { PrismaClient } from "@prisma/client";
import { games } from "./seeding/games";
import { regions } from "./seeding/region";
import { markerGroups } from "./seeding/marker-group";
import { markerCategories } from "./seeding/marker-category";
import { locations } from "./seeding/locations";

const prisma = new PrismaClient();

async function main() {
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
    const icon = markerCategories[i].title?.toLowerCase().replaceAll(" ", "_");
    await prisma.markerCategory.create({
      data: { ...markerCategories[i], icon: icon, template: "", info: "" },
    });
  }

  console.log("Seeding Marker Locations...");

  for (let i = 0; i < locations.length; i++) {
    const { categoryTitle, regionSlug, ...rest } = locations[i];

    const cats = await prisma.markerCategory.findFirst({
      where: { title: categoryTitle },
    });
    if (!cats) {
      console.log("Category does not exist for:", categoryTitle);
    }
    await prisma.markerLocation.create({
      data: { ...rest, regionSlug, media: {}, categoryId: cats.id },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
