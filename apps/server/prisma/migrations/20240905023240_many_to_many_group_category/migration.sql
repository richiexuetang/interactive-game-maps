-- DropForeignKey
ALTER TABLE "MarkerCategory" DROP CONSTRAINT "MarkerCategory_markerGroupId_fkey";

-- CreateTable
CREATE TABLE "GroupsOnCategories" (
    "categoryId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "GroupsOnCategories_pkey" PRIMARY KEY ("categoryId","groupId")
);

-- AddForeignKey
ALTER TABLE "GroupsOnCategories" ADD CONSTRAINT "GroupsOnCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MarkerCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupsOnCategories" ADD CONSTRAINT "GroupsOnCategories_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "MarkerGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
