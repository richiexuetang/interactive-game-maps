import { PrismaClient, Prisma } from "@prisma/client";
import { games } from "./seeding/maps";

const prisma = new PrismaClient();
const tableNames = Object.values(Prisma.ModelName);

async function main() {
  await refreshDatabase();

  for (let i = 0; i < games.length; i++) {
    await seedGame(games[i]);
  }
}

/**
 * Reset the database by truncating all tables and resetting the auto-incrementing ID
 */
async function refreshDatabase() {
  for (const tableName of tableNames) {
    await prisma.$queryRawUnsafe(
      `TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE`
    );
  }
}

async function seedGame(game) {
  const { regions, groups, ...gameData } = game;
  await prisma.game.create({
    data: { ...gameData },
  });

  const gameSlug = game.slug;
  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    const { subRegions, ...regionData } = region;

    await prisma.region.create({
      data: {
        ...regionData,
        thumbnailUrl: `images/games/${gameSlug}/${regionData.slug}.png`,
        tilePath: `${gameSlug}/${regionData.slug}`,
        gameSlug,
        order: i + 1,
      },
    });

    if (subRegions) {
      for (let j = 0; j < subRegions.length; j++) {
        const subRegion = subRegions[j];
        const coordinatesString = subRegion.coordinates
          .map((coord: any) => coord.join(" "))
          .join(", ");
        const coord = `POLYGON((${coordinatesString}))`;
        await prisma.$queryRaw`
                INSERT INTO "SubRegion" (coordinates, title, "regionSlug", slug)
                VALUES (ST_GeomFromText(${coord},4326), ${subRegion.title}, ${
          regionData.slug
        }, ${subRegion.title.toLowerCase().replaceAll(" ", "-")})`;
      }
      console.log("Seeded sub-regions for region", regionData.slug);
    }
  }
  console.log("Seeded regions for game", gameSlug);

  for (let i = 0; i < groups.length; i++) {
    const { title, categories } = groups[i];
    const newGroup = await prisma.markerGroup.create({
      data: { title, gameSlug },
    });

    for (let j = 0; j < categories.length; j++) {
      const { title, locations } = categories[j];

      let icon = title.toLowerCase().replaceAll(" ", "_");
      if (categories[j]?.icon) {
        icon = categories[j].icon;
      }

      let info = "";
      if (categories[j]?.info) {
        info = categories[j].info;
      }

      const newCategory = await prisma.markerCategory.create({
        data: { title, icon, groupId: newGroup.id, info },
      });

      for (let k = 0; k < locations.length; k++) {
        const { media, ...rest } = locations[k];
        const newLocation = await prisma.markerLocation.create({
          data: {
            ...rest,
            media: {},
            categoryId: newCategory.id,
          },
        });

        if (newLocation?.id && media?.length) {
          await seedMedia(media, newLocation.id);
        }
      }
      console.log("Seeded locations for category", title);
    }
    console.log("Seeded categories for group", title);
  }
  console.log("Seeded groups for game", gameSlug);
}

async function seedMedia(media, markerLocationId) {
  for (let i = 0; i < media.length; i++) {
    await prisma.media.create({
      data: { ...media[i], markerLocationId },
    });
  }
  console.log("Seeded media for marker location", markerLocationId);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
