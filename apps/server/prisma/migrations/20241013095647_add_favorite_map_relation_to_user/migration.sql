-- CreateTable
CREATE TABLE "_MapToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MapToUser_AB_unique" ON "_MapToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MapToUser_B_index" ON "_MapToUser"("B");

-- AddForeignKey
ALTER TABLE "_MapToUser" ADD CONSTRAINT "_MapToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Map"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MapToUser" ADD CONSTRAINT "_MapToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
