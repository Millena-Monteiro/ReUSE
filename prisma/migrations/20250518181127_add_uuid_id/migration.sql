-- CreateTable
CREATE TABLE "Historico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_id" INTEGER NOT NULL,
    "doador_id" INTEGER NOT NULL,
    "receptor_id" INTEGER NOT NULL,
    "data_transacao" DATETIME NOT NULL,
    "tipo" TEXT NOT NULL
);
