import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//Read
const getHistoricos = async (req, res) => {
  const historicos = await prisma.historico.findMany();
  res.json(historicos);
};

//Create
const createHistorico = async (req, res) => {
  const { item_id, doador_id, receptor_id, data_transacao, tipo } = req.body;

  try {
    const novo = await prisma.historico.create({
      data: {
        item_id,
        doador_id,
        receptor_id,
        data_transacao: new Date(data_transacao),
        tipo
      }
    });
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Update
const updateHistorico = async (req, res) => {
  const { id } = req.params;
  const { item_id, doador_id, receptor_id, data_transacao, tipo } = req.body;

  try {
    const atualizado = await prisma.historico.update({
      where: { id: parseInt(id, 10) },
      data: {
        item_id,
        doador_id,
        receptor_id,
        data_transacao: new Date(data_transacao),
        tipo
      }
    });
    res.json(atualizado);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//Delete
const deleteHistorico = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.historico.delete({ where: { id: parseInt(id, 10) } });
    res.json({ msg: 'Histórico deletado com sucesso' });
  } catch (err) {
    res.status(404).json({ error: 'Histórico não encontrado' });
  }
};

export default {
  getHistoricos,
  createHistorico,
  updateHistorico,
  deleteHistorico
};
