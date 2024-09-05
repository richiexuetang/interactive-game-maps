/*
  Warnings:

  - You are about to drop the column `regionSlug` on the `MarkerLocation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarkerLocation" DROP CONSTRAINT "MarkerLocation_regionSlug_fkey";

-- AlterTable
ALTER TABLE "MarkerGroup" ADD COLUMN     "regionId" INTEGER;

-- AlterTable
ALTER TABLE "MarkerLocation" DROP COLUMN "regionSlug",
ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "MarkerGroup" ADD CONSTRAINT "MarkerGroup_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MarkerCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
