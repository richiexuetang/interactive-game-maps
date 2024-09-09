/*
  Warnings:

  - You are about to drop the column `userId` on the `MarkerLocation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarkerLocation" DROP CONSTRAINT "MarkerLocation_userId_fkey";

-- AlterTable
ALTER TABLE "MarkerLocation" DROP COLUMN "userId";
