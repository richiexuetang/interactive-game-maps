// model Region {
//     id           Int              @id @default(autoincrement())
//     slug         String           @unique
//     title        String
//     thumbnailUrl String
//     minZoom      Int
//     maxZoom      Int
//     defaultZoom  Int
//     center       Decimal[]
//     tilePath     String
//     Game         Game?            @relation(fields: [gameSlug], references: [slug])
//     gameSlug     String?
//     locations    MarkerLocation[]
//     subRegions   SubRegion[]
//     order        Int              @default(1)
//   }
export const regions = [
  //#region Black Myth Wukong
  {
    slug: "chapter-1",
    title: "Chapter 1",
    thumbnailUrl: "thumbnails/chapter-1.png",
    minZoom: 9,
    maxZoom: 13,
    defaultZoom: 10,
    center: [0.60225040104451, -0.8546284080309799],
    tilePath: "black-myth-wukong/chapter-1",
    gameSlug: "black-myth-wukong",
    order: 1,
  },
  {
    slug: "chapter-2",
    title: "Chapter 2",
    thumbnailUrl: "thumbnails/chapter-2.png",
    minZoom: 9,
    maxZoom: 13,
    defaultZoom: 10,
    center: [0.60225040104451, -0.8546284080309799],
    tilePath: "black-myth-wukong/chapter-2",
    gameSlug: "black-myth-wukong",
    order: 2,
  },
  {
    slug: "chapter-3",
    title: "Chapter 3",
    thumbnailUrl: "thumbnails/chapter-3.png",
    minZoom: 9,
    maxZoom: 13,
    defaultZoom: 10,
    center: [0.60225040104451, -0.8546284080309799],
    tilePath: "black-myth-wukong/chapter-3",
    gameSlug: "black-myth-wukong",
    order: 3,
  },
  //#endregion

  //#region Tears of the Kingdom
  {
    slug: "hyrule",
    title: "Hyrule",
    thumbnailUrl: "thumbnails/hyrule.png",
    minZoom: 9,
    maxZoom: 16,
    defaultZoom: 10,
    center: [0.70760348036569, -0.71764231663026],
    tilePath: "totk/hyrule",
    gameSlug: "totk",
    order: 1,
  },
  //#endregion

  //#region Elden Ring
  {
    slug: "the-lands-between",
    title: "The Lands Between",
    thumbnailUrl: "thumbnails/the-lands-between.png",
    minZoom: 9,
    maxZoom: 16,
    defaultZoom: 10,
    center: [0.65676201402282, -0.76234815932221],
    tilePath: "elden-ring/the-lands-between",
    gameSlug: "elden-ring",
    order: 1,
  },
  {
    slug: "the-shadow-realm",
    title: "Realm of Shadow",
    thumbnailUrl: "thumbnails/the-shadow-realm.png",
    minZoom: 8,
    maxZoom: 16,
    defaultZoom: 10,
    center: [0.6685143165321, -0.72313106578409],
    tilePath: "elden-ring/the-shadow-lands",
    gameSlug: "elden-ring",
    order: 2,
  },
  //#endregion

  //#region The Witcher 3
  {
    slug: "white-orchard",
    title: "White Orchard",
    thumbnailUrl: "thumbnails/white-orchard.png",
    minZoom: 8,
    maxZoom: 12,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/white-orchard",
    gameSlug: "witcher-3",
    order: 1,
  },
  {
    slug: "velen-novigrad",
    title: "Velen Novigrad",
    thumbnailUrl: "thumbnails/velen-novigrad.png",
    minZoom: 8,
    maxZoom: 14,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/velen-novigrad",
    gameSlug: "witcher-3",
    order: 2,
  },
  {
    slug: "skellige",
    title: "Skellige Isles",
    thumbnailUrl: "thumbnails/skellige.png",
    minZoom: 8,
    maxZoom: 12,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/skellige",
    gameSlug: "witcher-3",
    order: 3,
  },

  {
    slug: "kaer-morhen",
    title: "Kaer Morhen",
    thumbnailUrl: "thumbnails/kaer-morhen.png",
    minZoom: 8,
    maxZoom: 12,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/kaer-morhen",
    gameSlug: "witcher-3",
    order: 4,
  },
  {
    slug: "toussaint",
    title: "Toussaint",
    thumbnailUrl: "thumbnails/toussaint.png",
    minZoom: 8,
    maxZoom: 14,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/toussaint",
    gameSlug: "witcher-3",
    order: 5,
  },
  {
    slug: "fablesphere",
    title: "Fablesphere",
    thumbnailUrl: "thumbnails/fablesphere",
    minZoom: 8,
    maxZoom: 12,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/fablesphere",
    gameSlug: "witcher-3",
    order: 6,
  },
  {
    slug: "isle-of-mists",
    title: "Isle of Mists",
    thumbnailUrl: "thumbnails/isle-of-mists.png",
    minZoom: 8,
    maxZoom: 12,
    defaultZoom: 9,
    center: [83.937238401332, -168.44211701243],
    tilePath: "witcher-3/isle-of-mists",
    gameSlug: "witcher-3",
    order: 7,
  },
  //#endregion
];
