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

  
export const createItem = async (data) => {
  const { titulo, descricao, status = 'disponível', userId } = data;

  const usuario = await prisma.user.findUnique({ where: { id: userId } });
  if (!usuario) {
    const erro = new Error('Usuário não encontrado');
    erro.code = 404;
    throw erro;
  }

  return prisma.item.create({
    data: {
      titulo,
      descricao,
      status,
      userId, 
    },
  });
};
export const updateItem = (id, data) =>
  prisma.item.update({ where: { id }, data });

export const deleteItem = (id) =>
  prisma.item.delete({ where: { id } });

export default prisma;