/*
  Warnings:

  - You are about to drop the column `regionId` on the `Location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_regionId_fkey";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "regionId";
