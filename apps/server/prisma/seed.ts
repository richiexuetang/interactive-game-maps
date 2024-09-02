import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.game.deleteMany();
  await prisma.map.deleteMany();
  await prisma.markerGroup.deleteMany();
  await prisma.markerCategory.deleteMany();
  await prisma.markerLocation.deleteMany();

  console.log("Seeding...");

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
