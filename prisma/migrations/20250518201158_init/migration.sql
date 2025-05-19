-- CreateTable
CREATE TABLE "Cupom" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "validade" TEXT NOT NULL,
    "utilizado" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Cupom_codigo_key" ON "Cupom"("codigo");
