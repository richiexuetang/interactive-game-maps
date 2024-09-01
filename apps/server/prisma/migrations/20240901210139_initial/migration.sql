-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "gameSlug" TEXT NOT NULL,
    "gameTitle" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Map" (
    "id" TEXT NOT NULL,
    "mapSlug" TEXT NOT NULL,
    "mapTitle" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "minZoom" INTEGER NOT NULL,
    "maxZoom" INTEGER NOT NULL,
    "defaultZoom" INTEGER NOT NULL,
    "tilePath" TEXT NOT NULL,
    "gameId" TEXT,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Map" ADD CONSTRAINT "Map_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
