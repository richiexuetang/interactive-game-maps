-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "defaultHidden" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "expandable" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "centerX" DECIMAL(65,30),
ADD COLUMN     "centerY" DECIMAL(65,30),
ALTER COLUMN "coordinates" DROP NOT NULL;
