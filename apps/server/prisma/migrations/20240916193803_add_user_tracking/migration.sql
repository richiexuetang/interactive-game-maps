-- AlterTable
ALTER TABLE "MarkerCategory" ADD COLUMN     "appUserId" TEXT;

-- AddForeignKey
ALTER TABLE "MarkerCategory" ADD CONSTRAINT "MarkerCategory_appUserId_fkey" FOREIGN KEY ("appUserId") REFERENCES "AppUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
