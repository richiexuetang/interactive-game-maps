-- AlterTable
ALTER TABLE "MarkerLocation" ADD COLUMN     "regionId" INTEGER;

-- AddForeignKey
ALTER TABLE "MarkerLocation" ADD CONSTRAINT "MarkerLocation_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;
