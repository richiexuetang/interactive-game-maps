-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT,
    "type" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "markerLocationId" INTEGER,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_markerLocationId_fkey" FOREIGN KEY ("markerLocationId") REFERENCES "MarkerLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
