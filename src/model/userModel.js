import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = () => 
  prisma.user.findMany({
    include: {
      avaliacoes: true, 
    },
  });

export const getUserById = (id) => 
  prisma.user.findUnique({
    where: { id },
    include: {
      avaliacoes: true,
    },
  });

export const createUser = (data) => {
  const { nome, email, senha_hash, tipo_usuario } = data;

  return prisma.user.create({
    data: {
      nome,
      email,
      senha_hash,
      tipo_usuario,
    },
  });
};

export const updateUser = (id, data) =>
  prisma.user.update({ where: { id }, data });

export const deleteUser = (id) =>
  prisma.user.delete({ where: { id } });

export default prisma;