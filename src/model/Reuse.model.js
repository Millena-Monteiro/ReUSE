import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Busca todos os registros de histórico
export const getAllHistorico = () => prisma.historico.findMany();

// Busca um registro de histórico por ID
export const getHistoricoById = (id) =>
  prisma.historico.findUnique({ where: { id } });

// Cria um novo registro de histórico
export const createHistorico = (data) => {
  const { item_id, doador_id, receptor_id, data_transacao, tipo } = data;

  return prisma.historico.create({
    data: {
      item_id,
      doador_id,
      receptor_id,
      data_transacao: new Date(data_transacao),
      tipo, // DOACAO | RECEBIMENTO | TRANSFERENCIA
    },
  });
};

// Atualiza um registro de histórico existente
export const updateHistorico = (id, data) =>
  prisma.historico.update({ where: { id }, data });

// Deleta um registro de histórico
export const deleteHistorico = (id) =>
  prisma.historico.delete({ where: { id } });

export default prisma;
