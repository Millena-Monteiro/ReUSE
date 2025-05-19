/*
  Warnings:

  - You are about to drop the column `data_criacao` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `senha_hash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_usuario` on the `User` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
