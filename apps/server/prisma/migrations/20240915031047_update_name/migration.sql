/*
  Warnings:

  - You are about to drop the column `userName` on the `AppUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AppUser" DROP COLUMN "userName",
ADD COLUMN     "username" TEXT;
