import { PrismaClient, Prisma } from "@prisma/client";
import { games } from "./seeding";

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

async function seedGame(game: any) {
  const { maps, groups, ...gameData } = game;
  await prisma.game.create({
    data: { ...gameData },
  });

  const gameSlug = game.slug;
  for (let i = 0; i < maps.length; i++) {
    const map = maps[i];
    const { regions, ...mapData } = map;

    await prisma.map.create({
      data: {
        ...mapData,
        gameSlug,
        order: i + 1,
      },
    });

    if (regions) {
      for (let j = 0; j < regions.length; j++) {
        const map = regions[j];
        if (!map.coordinates) {
          await prisma.region.create({
            data: {
              title: map.title,
              mapSlug: mapData.slug,
              centerX: map.centerX ?? null,
              centerY: map.centerY ?? null,
            },
          });
          continue;
        }
        const coordinatesString = map.coordinates
          .map((coord: any) => coord.join(" "))
          .join(", ");
        const coord = `POLYGON((${coordinatesString}))`;
        await prisma.$queryRaw`
                INSERT INTO "Region" (coordinates, title, "mapSlug", "centerX", "centerY")
                VALUES (ST_GeomFromText(${coord},4326), ${map.title}, ${
          mapData.slug
        }, ${map.centerX ?? null}, ${map.centerY ?? null})`;
      }
    }
  }

  for (let i = 0; i < groups.length; i++) {
    const { title, categories } = groups[i];
    const newGroup = await prisma.group.create({
      data: { title, gameSlug },
    });

    for (let j = 0; j < categories.length; j++) {
      const { title, locations, ...rest } = categories[j];

      let icon = title.toLowerCase().replaceAll(" ", "_");
      if (categories[j]?.icon) {
        icon = categories[j].icon;
      }

      let info = "";
      if (categories[j]?.info) {
        info = categories[j].info;
      }

      const newCategory = await prisma.category.create({
        data: { title, icon, groupId: newGroup.id, info, ...rest },
      });

      for (let k = 0; k < locations.length; k++) {
        const { media, ...rest } = locations[k];
        const newLocation = await prisma.location.create({
          data: {
            ...rest,
            media: {},
            categoryId: newCategory.id,
          },
        });
        console.log("seeded location", newLocation.id, newLocation.categoryId);

        if (newLocation?.id && media?.length) {
          await seedMedia(media, newLocation.id);
        }
      }
    }
  }
}

async function seedMedia(media: any, locationId: any) {
  for (let i = 0; i < media.length; i++) {
    await prisma.media.create({
      data: { ...media[i], locationId },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
