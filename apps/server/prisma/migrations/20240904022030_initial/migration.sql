-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "authorId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "minZoom" INTEGER NOT NULL,
    "maxZoom" INTEGER NOT NULL,
    "defaultZoom" INTEGER NOT NULL,
    "center" DECIMAL(65,30)[],
    "tilePath" TEXT NOT NULL,
    "gameSlug" TEXT,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkerGroup" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "gameSlug" TEXT,

    CONSTRAINT "MarkerGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkerCategory" (
    "id" SERIAL NOT NULL,
    "markerGroupId" INTEGER,
    "title" TEXT NOT NULL DEFAULT '',
    "icon" TEXT NOT NULL,
    "template" TEXT,
    "info" TEXT,

    CONSTRAINT "MarkerCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkerLocation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "regionSlug" TEXT,

    CONSTRAINT "MarkerLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Region_slug_key" ON "Region"("slug");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerGroup" ADD CONSTRAINT "MarkerGroup_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerCategory" ADD CONSTRAINT "MarkerCategory_markerGroupId_fkey" FOREIGN KEY ("markerGroupId") REFERENCES "MarkerGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_regionSlug_fkey" FOREIGN KEY ("regionSlug") REFERENCES "Region"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
