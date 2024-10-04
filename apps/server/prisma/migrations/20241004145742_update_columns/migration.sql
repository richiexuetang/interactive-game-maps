/*
  Warnings:

  - You are about to drop the column `center` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `maxZoom` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `minZoom` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `zoom` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailUrl` on the `Map` table. All the data in the column will be lost.
  - You are about to drop the column `tilePath` on the `Map` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "center",
DROP COLUMN "maxZoom",
DROP COLUMN "minZoom",
DROP COLUMN "zoom";

-- AlterTable
ALTER TABLE "Map" DROP COLUMN "thumbnailUrl",
DROP COLUMN "tilePath";
