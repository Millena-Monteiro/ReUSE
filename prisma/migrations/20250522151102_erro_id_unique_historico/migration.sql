/*
  Warnings:

  - A unique constraint covering the columns `[item_id]` on the table `Historico` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Historico_item_id_key" ON "Historico"("item_id");
