import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllItems = () =>
  prisma.item.findMany({
    include: {
      // usuario: true
    },
  });
  export const getItemById = (id) =>
  prisma.item.findUnique({
    where: { id },
    include: {
      // usuario: true
    },
  });

  
export const createItem = (data) => {
  const { titulo, descricao, status = 'disponível', usuarioId } = data;

  return prisma.item.create({
    data: {
      titulo,
      descricao,
      status,
      usuarioId,
    },
  });
};

export const updateItem = (id, data) =>
  prisma.item.update({ where: { id }, data });

export const deleteItem = (id) =>
  prisma.item.delete({ where: { id } });

export default prisma;