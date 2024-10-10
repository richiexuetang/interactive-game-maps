/*
  Warnings:

  - You are about to drop the column `foundLocations` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "foundLocations";

-- CreateTable
CREATE TABLE "_LocationToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToUser_AB_unique" ON "_LocationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToUser_B_index" ON "_LocationToUser"("B");

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToUser" ADD CONSTRAINT "_LocationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
