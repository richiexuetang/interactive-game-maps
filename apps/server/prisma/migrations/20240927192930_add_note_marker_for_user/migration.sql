-- CreateTable
CREATE TABLE "NoteMarker" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "NoteMarker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NoteMarker" ADD CONSTRAINT "NoteMarker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "AppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
