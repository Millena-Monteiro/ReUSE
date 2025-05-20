import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Busca todos os registros de histórico
export const getAllHistorico = () => prisma.historico.findMany();

// Busca um registro de histórico por ID
export const getHistoricoById = (id) =>
  prisma.historico.findUnique({ where: { id } });

// Cria um novo registro de histórico
export const createHistorico = async (data) => {
  const { item_id, doador_id, receptor_id, data_transacao, tipo } = data;

  // Verifica se o doador existe
  const doador = await prisma.user.findUnique({ where: { id: doador_id } });
  if (!doador) {
    const erro = new Error('Doador não encontrado');
    erro.code = 404;
    throw erro;
  }

  // Verifica se o receptor existe
  const receptor = await prisma.user.findUnique({ where: { id: receptor_id } });
  if (!receptor) {
    const erro = new Error('Receptor não encontrado');
    erro.code = 404;
    throw erro;
  }

  // Verifica se o item existe
  const item = await prisma.item.findUnique({ where: { id: item_id } });
  if (!item) {
    const erro = new Error('Item não encontrado');
    erro.code = 404;
    throw erro;
  }

  // Cria o histórico
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
