
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCupons = () => {
  return prisma.cupom.findMany();
};

export const getCupomById = (id) => {
  return prisma.cupom.findUnique({ where: { id } });
};

export const createCupom = async (data) => {
  const { userId } = data;

  const usuario = await prisma.user.findUnique({ where: { id: userId } });
  if (!usuario) {
    const erro = new Error('Usuário não encontrado');
    erro.code = 404;
    throw erro;
  }

  return prisma.cupom.create({ data });
};


export const updateCupom = (id, data) => {
  return prisma.cupom.update({
    where: { id },
    data,
  });
};

export const deleteCupom = (id) => {
  return prisma.cupom.delete({ where: { id } });
};
