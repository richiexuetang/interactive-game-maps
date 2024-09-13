/*
  Warnings:

  - You are about to drop the column `defaultZoom` on the `Region` table. All the data in the column will be lost.
  - Made the column `zoom` on table `Region` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Region" DROP COLUMN "defaultZoom",
ALTER COLUMN "zoom" SET NOT NULL;
