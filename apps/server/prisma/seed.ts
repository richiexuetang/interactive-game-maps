import { PrismaClient } from "@prisma/client";
import { locations } from "./location-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.markerLocation.deleteMany();

  console.log("Seeding Marker Locations...");

  console.log(locations);
  await prisma.markerLocation.createMany({ data: locations });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
