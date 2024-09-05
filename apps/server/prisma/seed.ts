import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.game.deleteMany();
  await prisma.markerGroup.deleteMany();
  await prisma.markerCategory.deleteMany();
  await prisma.markerLocation.deleteMany();
  await prisma.region.deleteMany();

  console.log("Seeding...");

  const regionObj = {
    minZoom: 9,
    maxZoom: 12,
    defaultZoom: 9,
    center: [0.46575866593176, -0.65013585128767],
  };

  const groups = [
    { title: "Locations" },
    { title: "Key Items" },
    { title: "Items" },
    { title: "Equipment" },
    { title: "Enemies" },
    { title: "Quests" },
    { title: "Other" },
    { title: "Materials" },
  ];

  await prisma.game.create({
    data: {
      slug: "black-myth-wukong",
      title: "Black Myth: Wukong",
      thumbnailUrl: "thumbnails/black-myth-wukong.jpeg",
      regions: {
        create: [
          {
            slug: "chapter-1",
            title: "Chapter 1",
            thumbnailUrl: "thumbnails/chapter-1.png",
            tilePath: "black-myth-wukong/chapter-1",
            ...regionObj,
            groups: {
              create: [...groups],
            },
          },
          {
            slug: "chapter-2",
            title: "Chapter 2",
            thumbnailUrl: "thumbnails/chapter-2.png",
            tilePath: "/black-myth-wukong/chapter-2",
            ...regionObj,
            groups: {
              create: [...groups],
            },
          },
          {
            slug: "chapter-3-1",
            title: "Chapter 3-1: Snowhill Path",
            thumbnailUrl: "thumbnails/chapter-2.png",
            tilePath: "/black-myth-wukong/chapter-3-1",
            ...regionObj,
            groups: {
              create: [...groups],
            },
          },
          {
            slug: "chapter-3-2",
            title: "Chapter 3-2: Pagoda Realm (Inside)",
            thumbnailUrl: "thumbnails/chapter-3-2.png",
            tilePath: "/black-myth-wukong/chapter-3-2",
            ...regionObj,
            groups: {
              create: [...groups],
            },
          },
          {
            slug: "chapter-3-3",
            title: "Chapter 3-3: Pagoda Realm (Outside)",
            thumbnailUrl: "thumbnails/chapter-3-3.png",
            tilePath: "/black-myth-wukong/chapter-3-3",
            ...regionObj,
            groups: {
              create: [...groups],
            },
          },
          {
            slug: "chapter-3-4",
            title: "Chapter 3-4: Bitter Lake",
            thumbnailUrl: "thumbnails/chapter-3-4.png",
            tilePath: "/black-myth-wukong/chapter-3-4",
            ...regionObj,
            groups: {
              create: [...groups],
            },
          },
        ],
      },
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

  const obj = [
    {
      markerGroupId: "Locations",
      title: "Keeper Shrine",
      icon: "keeper_shrine",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Locations",
      title: "Meditation Spot",
      icon: "meditation_spot",
      info: "Meditation Spots unlock 1 free Skill Point.  Finding all Meditation Spots awards the _Scenic Seeker_ achievement",
      template: "",
    },
    {
      markerGroupId: "Locations",
      title: "Point of Interest",
      icon: "point_of_interest",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Key Items",
      title: "Awaken Wine Worm",
      icon: "awaken_wine_worm",
      info: "Awaken Wine Worms increase the healing effectiveness of your Gourd",
      template: "**Location:** ??",
    },
    {
      markerGroupId: "Key Items",
      title: "Celestial Pill",
      icon: "celestial_pill",
      info: "Celestial Jade Lotus Pills increase maximum health.\n\nCelestial Nonary Pills increase maximum stamina.\n\nCelestial Taiyi Pills increase maximum mana.",
      template: "",
    },
    {
      markerGroupId: "Key Items",
      title: "Drink",
      icon: "drink",
      info: "",
      template: "**Location:** ??  \n\n**Effect:**  ??",
    },
    {
      markerGroupId: "Key Items",
      title: "Formula",
      icon: "formula",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Key Items",
      title: "Gourd",
      icon: "gourd",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Key Items",
      title: "Key Item",
      icon: "key_item",
      info: "",
      template: "**Location:** ??  \n\n**Use:** ??",
    },
    {
      markerGroupId: "Key Items",
      title: "Luojia Fragrant Vine",
      icon: "luojia_fragrant_vine",
      info: "Luojia Fragrant Vines each give you an extra charge for your Gourd",
      template: "**Location:** ??",
    },
    {
      markerGroupId: "Key Items",
      title: "Soak",
      icon: "soak",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Key Items",
      title: "Spirit",
      icon: "spirit",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Items",
      title: "Chest",
      icon: "chest",
      info: "",
      template: "**Location:** ??",
    },
    {
      markerGroupId: "Items",
      title: "Will",
      icon: "will",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Equipment",
      title: "Armor",
      icon: "armor",
      info: "",
      template:
        "**Type:** ??  \n\n**Rarity:** ?? \n\n**Defence:** ?? \n   \n**Effect:** ??",
    },
    {
      markerGroupId: "Equipment",
      title: "Curio",
      icon: "curio",
      info: "Curios act as accessories and can offer minor buffs or stat boosts",
      template: "**Location:** ??  \n\n**Effect:** ??",
    },
    {
      markerGroupId: "Equipment",
      title: "Spell",
      icon: "spell",
      info: "",
      template: "**Location:** ??  \n\n**Effect:** ??",
    },
    {
      markerGroupId: "Equipment",
      title: "Transformation Spell",
      icon: "transformation_spell",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Equipment",
      title: "Vessel",
      icon: "vessel",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Equipment",
      title: "Weapon",
      icon: "weapon",
      info: "",
      template:
        "**Location:** ??  \n\n**Damage:** ??  \n**Critical Chance:** ??  \n\n**Unique Effect:** ??\n\n**Crafting Ingredients:**   \n- ??",
    },
    {
      markerGroupId: "Enemies",
      title: "Elite Lesser Yaoguai",
      icon: "elite_lesser_yaoguai",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Enemies",
      title: "Lesser Yaoguai",
      icon: "lesser_yaoguai",
      info: "",
      template: "**Location:** ??  \n\n**Effect:** ??",
    },
    {
      markerGroupId: "Enemies",
      title: "Yaoguai Chief",
      icon: "yaoguai_chief",
      info: "",
      template: "**Location:** ??  \n\n**Reward:** ??",
    },
    {
      markerGroupId: "Enemies",
      title: "Yaoguai King",
      icon: "yaoguai_king",
      info: "",
      template: "**Location:** ??  \n\n**Reward:**\n- ??",
    },
    {
      markerGroupId: "Quests",
      title: "Side Quest",
      icon: "side_quest",
      info: "",
      template: "**How To Begin:** ??\n\n**Steps:**\n0.  ??",
    },
    {
      markerGroupId: "Other",
      title: "Easter Egg",
      icon: "easter_egg",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Other",
      title: "Miscellaneous",
      icon: "miscellaneous",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Other",
      title: "NPC",
      icon: "npc",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Aged Ginseng",
      icon: "aged_ginseng",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Fire Bellflower",
      icon: "fire_bellflower",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Fragrant Jade Flower",
      icon: "fragrant_jade_flower",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Jade Lotus",
      icon: "jade_lotus",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Licorice",
      icon: "licorice",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Millenium Ginseng",
      icon: "millenium_ginseng",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Nine-Capped Lingzhi",
      icon: "nine_capped_lingzhi",
      info: "",
      template: "",
    },
    {
      markerGroupId: "Materials",
      title: "Purple Lingzhi",
      icon: "purple_lingzhi",
      info: "",
      template: "",
    },
  ];

  for (let i = 0; i < obj.length; i++) {
    const group = await prisma.markerGroup.findFirst({
      where: { title: obj[i].markerGroupId },
    });

    const category = obj[i];
    const { markerGroupId, ...rest } = category;
    if (group) {
      await prisma.markerCategory.create({
        data: { ...rest, markerGroupId: group.id },
      });
    }
  }

  await prisma.user.create({
    data: {
      email: "bart@simpson.com",
      firstName: "Bart",
      lastName: "Simpson",
      role: "ADMIN",
      password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
