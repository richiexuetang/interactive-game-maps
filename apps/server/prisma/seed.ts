import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.game.deleteMany();
  await prisma.markerGroup.deleteMany();
  await prisma.markerCategory.deleteMany();
  await prisma.markerLocation.deleteMany();
  await prisma.region.deleteMany();

  console.log("Seeding...");

  await prisma.game.create({
    data: {
      slug: "black-myth-wukong",
      title: "Black Myth: Wukong",
      thumbnailUrl: "thumbnails/black-myth-wukong.jpeg",
    },
  });
  await prisma.game.create({
    data: {
      slug: "witcher-3",
      title: "The Witcher 3: The Wild Hunt",
      thumbnailUrl: "thumbnails/witcher-3.jpg",
    },
  });
  await prisma.game.create({
    data: {
      slug: "totk",
      title: "The Legend of Zelda: Tears of the Kingdom",
      thumbnailUrl: "thumbnails/totk.png",
    },
  });

  await prisma.region.create({
    data: {
      slug: "chapter-1",
      title: "Chapter 1",
      thumbnailUrl: "thumbnails/chapter-2.png",
      minZoom: 9,
      maxZoom: 12,
      defaultZoom: 9,
      tilePath: "chapter-1",
      gameSlug: "black-myth-wukong",
      center: [0.46575866593176, -0.65013585128767],
    },
  });

  await prisma.region.create({
    data: {
      slug: "chapter-2",
      title: "Chapter 2",
      thumbnailUrl: "thumbnails/chapter-2.png",
      minZoom: 9,
      maxZoom: 12,
      defaultZoom: 9,
      tilePath: "chapter-2",
      gameSlug: "black-myth-wukong",
      center: [0.46575866593176, -0.65013585128767],
    },
  });

  await prisma.user.create({
    data: {
      email: "lisa@simpson.com",
      firstname: "Lisa",
      lastname: "Simpson",
      password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
      role: "USER",
      posts: {
        create: {
          title: "Join us for Prisma Day 2019 in Berlin",
          content: "https://www.prisma.io/day/",
          published: true,
        },
      },
    },
  });
  await prisma.user.create({
    data: {
      email: "bart@simpson.com",
      firstname: "Bart",
      lastname: "Simpson",
      role: "ADMIN",
      password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
      posts: {
        create: [
          {
            title: "Subscribe to GraphQL Weekly for community news",
            content: "https://graphqlweekly.com/",
            published: true,
          },
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
            published: false,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
