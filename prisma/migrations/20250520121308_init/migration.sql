-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Historico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_id" TEXT NOT NULL,
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
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
