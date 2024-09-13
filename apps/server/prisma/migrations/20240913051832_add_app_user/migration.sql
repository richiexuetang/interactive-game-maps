/*
  Warnings:

  - You are about to drop the `UsersOnLocations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersOnLocations" DROP CONSTRAINT "UsersOnLocations_locationId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnLocations" DROP CONSTRAINT "UsersOnLocations_userId_fkey";

-- DropTable
DROP TABLE "UsersOnLocations";

-- CreateTable
CREATE TABLE "AppUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "AppUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppUsersOnLocations" (
    "userId" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "AppUsersOnLocations_pkey" PRIMARY KEY ("userId","locationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_email_key" ON "AppUser"("email");

-- AddForeignKey
ALTER TABLE "AppUsersOnLocations" ADD CONSTRAINT "AppUsersOnLocations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppUsersOnLocations" ADD CONSTRAINT "AppUsersOnLocations_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "MarkerLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
