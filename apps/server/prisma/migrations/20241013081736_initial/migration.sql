-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('MARKER', 'TEXT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT,
    "password" TEXT,
    "username" TEXT,
    "hideFound" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoteMarker" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userEmail" TEXT NOT NULL,
    "mapSlug" TEXT NOT NULL,

    CONSTRAINT "NoteMarker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Map" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "gameSlug" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 1,
    "minZoom" INTEGER NOT NULL DEFAULT 9,
    "maxZoom" INTEGER NOT NULL DEFAULT 14,
    "zoom" INTEGER NOT NULL DEFAULT 10,
    "center" DECIMAL(65,30)[] DEFAULT ARRAY[0, 0]::DECIMAL(65,30)[],

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "coordinates" geometry,
    "title" TEXT NOT NULL,
    "mapSlug" TEXT NOT NULL,
    "centerX" DECIMAL(65,30),
    "centerY" DECIMAL(65,30),

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "gameSlug" TEXT NOT NULL,
    "expandable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "info" TEXT,
    "groupId" INTEGER,
    "defaultHidden" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "categoryId" INTEGER,
    "mapSlug" TEXT NOT NULL,
    "type" "LocationType" NOT NULL DEFAULT 'MARKER',

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "locationId" INTEGER,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChecklistGuide" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "gameSlug" TEXT NOT NULL,

    CONSTRAINT "ChecklistGuide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToChecklistGuide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LocationToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Map_slug_key" ON "Map"("slug");

-- CreateIndex
CREATE INDEX "Region_coordinates_idx" ON "Region" USING GIST ("coordinates");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToChecklistGuide_AB_unique" ON "_CategoryToChecklistGuide"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToChecklistGuide_B_index" ON "_CategoryToChecklistGuide"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToUser_AB_unique" ON "_LocationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToUser_B_index" ON "_LocationToUser"("B");

-- AddForeignKey
ALTER TABLE "NoteMarker" ADD CONSTRAINT "NoteMarker_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoteMarker" ADD CONSTRAINT "NoteMarker_mapSlug_fkey" FOREIGN KEY ("mapSlug") REFERENCES "Map"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Map" ADD CONSTRAINT "Map_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_mapSlug_fkey" FOREIGN KEY ("mapSlug") REFERENCES "Map"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_mapSlug_fkey" FOREIGN KEY ("mapSlug") REFERENCES "Map"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistGuide" ADD CONSTRAINT "ChecklistGuide_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToChecklistGuide" ADD CONSTRAINT "_CategoryToChecklistGuide_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToChecklistGuide" ADD CONSTRAINT "_CategoryToChecklistGuide_B_fkey" FOREIGN KEY ("B") REFERENCES "ChecklistGuide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
