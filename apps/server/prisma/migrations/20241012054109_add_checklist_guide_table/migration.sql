-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "checklistGuideId" INTEGER;

-- CreateTable
CREATE TABLE "ChecklistGuide" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "gameSlug" TEXT NOT NULL,

    CONSTRAINT "ChecklistGuide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_checklistGuideId_fkey" FOREIGN KEY ("checklistGuideId") REFERENCES "ChecklistGuide"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistGuide" ADD CONSTRAINT "ChecklistGuide_gameSlug_fkey" FOREIGN KEY ("gameSlug") REFERENCES "Game"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
