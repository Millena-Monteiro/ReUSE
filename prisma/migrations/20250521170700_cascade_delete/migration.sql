-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cupom" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "validade" TEXT NOT NULL,
    "utilizado" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Cupom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cupom" ("codigo", "id", "userId", "utilizado", "validade", "valor") SELECT "codigo", "id", "userId", "utilizado", "validade", "valor" FROM "Cupom";
DROP TABLE "Cupom";
ALTER TABLE "new_Cupom" RENAME TO "Cupom";
CREATE UNIQUE INDEX "Cupom_codigo_key" ON "Cupom"("codigo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
