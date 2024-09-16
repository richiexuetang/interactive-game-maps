-- DropForeignKey
ALTER TABLE "MarkerLocation" DROP CONSTRAINT "MarkerLocation_categoryId_fkey";

-- AlterTable
ALTER TABLE "MarkerLocation" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MarkerCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
