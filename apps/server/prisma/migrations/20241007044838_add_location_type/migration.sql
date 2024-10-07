-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('MARKER', 'TEXT');

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "type" "LocationType" NOT NULL DEFAULT 'MARKER';
