-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('Marker', 'Text', 'Line');

-- AlterTable
ALTER TABLE "MarkerLocation" ADD COLUMN     "type" "LocationType" NOT NULL DEFAULT 'Marker';

-- AlterTable
ALTER TABLE "SubRegion" ADD COLUMN     "polygon" POLYGON;
