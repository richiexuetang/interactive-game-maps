/*
  Warnings:

  - You are about to drop the `AppUsersOnLocations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AppUsersOnLocations" DROP CONSTRAINT "AppUsersOnLocations_locationId_fkey";

-- DropForeignKey
ALTER TABLE "AppUsersOnLocations" DROP CONSTRAINT "AppUsersOnLocations_userId_fkey";

-- DropTable
DROP TABLE "AppUsersOnLocations";
