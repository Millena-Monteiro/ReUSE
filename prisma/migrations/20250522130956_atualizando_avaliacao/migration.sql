/*
  Warnings:

  - Made the column `comentario` on table `Avaliacao` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("comentario", "id", "nota", "userId") SELECT "comentario", "id", "nota", "userId" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
