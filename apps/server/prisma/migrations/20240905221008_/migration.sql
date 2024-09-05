/*
  Warnings:

  - You are about to drop the `RegionOnGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RegionOnGroup" DROP CONSTRAINT "RegionOnGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "RegionOnGroup" DROP CONSTRAINT "RegionOnGroup_regionId_fkey";

-- DropTable
DROP TABLE "RegionOnGroup";
