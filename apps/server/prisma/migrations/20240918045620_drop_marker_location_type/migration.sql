/*
  Warnings:

  - You are about to drop the column `type` on the `MarkerLocation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarkerLocation" DROP COLUMN "type";

-- DropEnum
DROP TYPE "LocationType";
