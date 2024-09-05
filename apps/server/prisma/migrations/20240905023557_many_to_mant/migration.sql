/*
  Warnings:

  - You are about to drop the `GroupsOnCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroupsOnCategories" DROP CONSTRAINT "GroupsOnCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "GroupsOnCategories" DROP CONSTRAINT "GroupsOnCategories_groupId_fkey";

-- DropForeignKey
ALTER TABLE "MarkerGroup" DROP CONSTRAINT "MarkerGroup_regionId_fkey";

-- DropTable
DROP TABLE "GroupsOnCategories";

-- CreateTable
CREATE TABLE "RegionOnGroup" (
    "regionId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "RegionOnGroup_pkey" PRIMARY KEY ("regionId","groupId")
);

-- AddForeignKey
ALTER TABLE "RegionOnGroup" ADD CONSTRAINT "RegionOnGroup_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionOnGroup" ADD CONSTRAINT "RegionOnGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "MarkerGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerCategory" ADD CONSTRAINT "MarkerCategory_markerGroupId_fkey" FOREIGN KEY ("markerGroupId") REFERENCES "MarkerGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
