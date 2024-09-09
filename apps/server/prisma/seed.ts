import { PrismaClient } from "@prisma/client";
import { locations } from "./location-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.markerLocation.deleteMany();

  console.log("Seeding Marker Locations...");

  for (let i = 0; i < locations.length; i++) {
    const curr = locations[i];
    const { media, ...rest } = curr;
    await prisma.markerLocation.create({ data: rest });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
