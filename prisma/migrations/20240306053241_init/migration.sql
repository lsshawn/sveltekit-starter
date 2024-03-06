-- CreateTable
CREATE TABLE "equipments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "code" TEXT NOT NULL,
    "photoUrl" TEXT,
    "status" TEXT NOT NULL
);
