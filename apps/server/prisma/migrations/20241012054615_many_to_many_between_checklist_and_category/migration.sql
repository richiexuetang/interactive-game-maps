/*
  Warnings:

  - You are about to drop the column `checklistGuideId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_checklistGuideId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "checklistGuideId";

-- CreateTable
CREATE TABLE "_CategoryToChecklistGuide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToChecklistGuide_AB_unique" ON "_CategoryToChecklistGuide"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToChecklistGuide_B_index" ON "_CategoryToChecklistGuide"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToChecklistGuide" ADD CONSTRAINT "_CategoryToChecklistGuide_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToChecklistGuide" ADD CONSTRAINT "_CategoryToChecklistGuide_B_fkey" FOREIGN KEY ("B") REFERENCES "ChecklistGuide"("id") ON DELETE CASCADE ON UPDATE CASCADE;
