-- DropForeignKey
ALTER TABLE "MarkerCategory" DROP CONSTRAINT "MarkerCategory_appUserId_fkey";

-- AlterTable
ALTER TABLE "AppUser" ADD COLUMN     "trackingCategories" INTEGER[];
