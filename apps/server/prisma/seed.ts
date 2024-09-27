import { PrismaClient } from "@prisma/client";
import { bmw } from "./seeding/bmw";
import { totk } from "./seeding/totk";
import { eldenRing } from "./seeding/elden-ring";
import { witcher3 } from "./seeding/witcher";
import { hogwarts } from "./seeding/hogwarts";
import { gow } from "./seeding/gow";

const prisma = new PrismaClient();

async function main() {
  await prisma.markerLocation.deleteMany({});
  await prisma.subRegion.deleteMany({});
  await prisma.media.deleteMany({});
  await prisma.markerCategory.deleteMany({});
  await prisma.markerGroup.deleteMany({});
  await prisma.region.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.appUser.deleteMany({});

  const games = [bmw, totk, eldenRing, witcher3, hogwarts, gow];
  for (let i = 0; i < games.length; i++) {
    await seedGame(games[i]);
  }
}

async function seedGame(game) {
  const {
    slug: gameSlug,
    title,
    description,
    maxZoom,
    minZoom,
    zoom,
    center,
    regions,
    groups,
  } = game;
  await prisma.game.create({
    data: {
      slug: gameSlug,
      title,
      description,
      maxZoom,
      minZoom,
      zoom,
      center,
    },
  });

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    const { slug, title, subRegions } = region;

    await prisma.region.create({
      data: {
        slug,
        title,
        thumbnailUrl: `images/games/${gameSlug}/${slug}.png`,
        tilePath: `${gameSlug}/${slug}`,
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
                VALUES (ST_GeomFromText(${coord},4326), ${
          subRegion.title
        }, ${slug}, ${subRegion.title.toLowerCase().replaceAll(" ", "-")})`;
      }
    }
  }

  for (let i = 0; i < groups.length; i++) {
    const { title, categories } = groups[i];
    const newGroup = await prisma.markerGroup.create({
      data: { title, gameSlug },
    });

    for (let j = 0; j < categories.length; j++) {
      const { title, locations } = categories[j];
      // @ts-ignore
      const icon = categories[j]?.icon
        ? // @ts-ignore
          categories[j]?.icon
        : title.toLowerCase().replaceAll(" ", "_");
      // @ts-ignore
      const info = categories[j]?.info ? categories[j]?.info : "";
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

        if (media?.length) {
          for (let l = 0; l < media.length; l++) {
            await prisma.media.create({
              data: { ...media[l], markerLocationId: newLocation.id },
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
