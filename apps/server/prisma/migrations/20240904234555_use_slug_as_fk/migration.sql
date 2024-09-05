/*
  Warnings:

  - You are about to drop the column `regionId` on the `MarkerLocation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarkerLocation" DROP CONSTRAINT "MarkerLocation_regionId_fkey";

-- AlterTable
ALTER TABLE "MarkerLocation" DROP COLUMN "regionId",
ADD COLUMN     "regionSlug" TEXT;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_regionSlug_fkey" FOREIGN KEY ("regionSlug") REFERENCES "Region"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
