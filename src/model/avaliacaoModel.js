import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const criarAvaliacao = async ({ nota, comentario, userId }) => {
  const usuario = await prisma.user.findUnique({ where: { id: userId } });
  if (!usuario) {
    const erro = new Error('Usuário não encontrado');
    erro.code = 404;
    throw erro;
  }

  return prisma.avaliacao.create({
    data: {
      nota,
      comentario,
      user: { connect: { id: userId } },
    },
  });
};

export const listarAvaliacoes = async () => {
  return prisma.avaliacao.findMany({
    include: {
      user: { select: { id: true, nome: true, email: true } },
    },
  });
};

export const getAvaliacaoPorId = async (id) => {
  return prisma.avaliacao.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, nome: true, email: true } },
    },
  });
};

export const atualizarAvaliacao = async (id, data) => {
  return prisma.avaliacao.update({
    where: { id },
    data,
  });
};

export const deletarAvaliacao = async (id) => {
  return prisma.avaliacao.delete({
    where: { id },
  });
};
