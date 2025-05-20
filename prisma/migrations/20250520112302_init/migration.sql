/*
  Warnings:

  - You are about to drop the column `userID` on the `Cupom` table. All the data in the column will be lost.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `usuarioId` on the `Item` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Cupom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
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
    CONSTRAINT "Cupom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cupom" ("codigo", "id", "utilizado", "validade", "valor") SELECT "codigo", "id", "utilizado", "validade", "valor" FROM "Cupom";
DROP TABLE "Cupom";
ALTER TABLE "new_Cupom" RENAME TO "Cupom";
CREATE UNIQUE INDEX "Cupom_codigo_key" ON "Cupom"("codigo");
CREATE TABLE "new_Historico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_id" INTEGER NOT NULL,
    "receptor_id" TEXT NOT NULL,
    "doador_id" TEXT NOT NULL,
    "data_transacao" DATETIME NOT NULL,
    "tipo" TEXT NOT NULL,
    CONSTRAINT "Historico_receptor_id_fkey" FOREIGN KEY ("receptor_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Historico_doador_id_fkey" FOREIGN KEY ("doador_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Historico" ("data_transacao", "doador_id", "id", "item_id", "receptor_id", "tipo") SELECT "data_transacao", "doador_id", "id", "item_id", "receptor_id", "tipo" FROM "Historico";
DROP TABLE "Historico";
ALTER TABLE "new_Historico" RENAME TO "Historico";
CREATE UNIQUE INDEX "Historico_item_id_key" ON "Historico"("item_id");
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'disponível',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("createdAt", "descricao", "id", "status", "titulo", "updatedAt") SELECT "createdAt", "descricao", "id", "status", "titulo", "updatedAt" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
