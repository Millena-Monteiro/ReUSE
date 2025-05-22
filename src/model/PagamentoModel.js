import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Criar pagamento
export const criarPagamento = async ({ valor, metodo, status, userId }) => {
  const usuario = await prisma.user.findUnique({ where: { id: userId } });
  if (!usuario) {
    const erro = new Error('Usuário não encontrado');
    erro.code = 404;
    throw erro;
  }

  return prisma.pagamento.create({
    data: {
      valor,
      metodo,
      status: status || 'pendente',
      user: {
        connect: { id: userId }
      }
    }
  });
};

// Listar todos os pagamentos
export const listarPagamentos = async () => {
  return prisma.pagamento.findMany({
    include: {
      user: {
        select: {
          nome: true,
          email: true
        }
      }
    }
  });
};

// Buscar pagamento por ID
export const getPagamentoPorId = async (id) => {
  return prisma.pagamento.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          nome: true,
          email: true
        }
      }
    }
  });
};

// Atualizar pagamento
export const atualizarPagamento = async (id, data) => {
  return prisma.pagamento.update({
    where: { id },
    data
  });
};

// Deletar pagamento
export const deletarPagamento = async (id) => {
  return prisma.pagamento.delete({
    where: { id }
  });
};
