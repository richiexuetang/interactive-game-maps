/*
  Warnings:

  - You are about to drop the column `template` on the `MarkerCategory` table. All the data in the column will be lost.
  - You are about to drop the column `fileName` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the `SubRegion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `logo` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `previewUrl` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `iconUrl` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gameSlug` on table `MarkerGroup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `MarkerLocation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regionSlug` on table `MarkerLocation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gameSlug` on table `Region` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "MarkerGroup" DROP CONSTRAINT "MarkerGroup_gameSlug_fkey";

-- DropForeignKey
ALTER TABLE "MarkerLocation" DROP CONSTRAINT "MarkerLocation_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "MarkerLocation" DROP CONSTRAINT "MarkerLocation_regionSlug_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_gameSlug_fkey";

-- DropForeignKey
ALTER TABLE "SubRegion" DROP CONSTRAINT "SubRegion_parentRegionId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "previewUrl" SET NOT NULL,
ALTER COLUMN "iconUrl" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "MarkerCategory" DROP COLUMN "template";

-- AlterTable
ALTER TABLE "MarkerGroup" ALTER COLUMN "gameSlug" SET NOT NULL;

-- AlterTable
ALTER TABLE "MarkerLocation" ALTER COLUMN "categoryId" SET NOT NULL,
ALTER COLUMN "regionSlug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "fileName";

-- AlterTable
ALTER TABLE "Region" ALTER COLUMN "gameSlug" SET NOT NULL;

-- DropTable
DROP TABLE "SubRegion";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerGroup" ADD CONSTRAINT "MarkerGroup_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MarkerCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_regionSlug_fkey" FOREIGN KEY ("regionSlug") REFERENCES "Region"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
