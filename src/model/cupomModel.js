
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCupons = () => {
  return prisma.cupom.findMany();
};

export const getCupomById = (id) => {
  return prisma.cupom.findUnique({ where: { id } });
};

export const createCupom = (data) => {
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
