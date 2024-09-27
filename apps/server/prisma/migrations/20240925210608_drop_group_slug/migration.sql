/*
  Warnings:

  - You are about to drop the column `groupSlug` on the `MarkerCategory` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `MarkerGroup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarkerCategory" DROP CONSTRAINT "MarkerCategory_groupSlug_fkey";

-- DropIndex
DROP INDEX "MarkerGroup_slug_key";

-- AlterTable
ALTER TABLE "MarkerCategory" DROP COLUMN "groupSlug",
ADD COLUMN     "groupId" INTEGER;

-- AlterTable
ALTER TABLE "MarkerGroup" DROP COLUMN "slug";

-- AddForeignKey
ALTER TABLE "MarkerCategory" ADD CONSTRAINT "MarkerCategory_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "MarkerGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
