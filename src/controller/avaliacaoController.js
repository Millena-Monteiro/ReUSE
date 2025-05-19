import * as avaliacaoModel from '../model/avaliacaoModel.js';

export const createAvaliacao = async (req, res) => {
  const { nota, comentario, userId } = req.body;

  try {
    const nova = await avaliacaoModel.criarAvaliacao({ nota, comentario, userId });
    res.status(201).json(nova);
  } catch (err) {
    res.status(err.code === 404 ? 404 : 500).json({ erro: err.message });
  }
};

export const getAllAvaliacoes = async (req, res) => {
  const avaliacoes = await avaliacaoModel.listarAvaliacoes();
  res.json(avaliacoes);
};

export const getAvaliacaoById = async (req, res) => {
  const { id } = req.params;
  const avaliacao = await avaliacaoModel.getAvaliacaoPorId(id);
  if (!avaliacao) return res.status(404).json({ erro: 'Avaliação não encontrada' });
  res.json(avaliacao);
};

export const updateAvaliacao = async (req, res) => {
  const { id } = req.params;
  try {
    const atualizada = await avaliacaoModel.atualizarAvaliacao(id, req.body);
    res.json(atualizada);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar avaliação' });
  }
};

export const deleteAvaliacao = async (req, res) => {
  const { id } = req.params;
  try {
    await avaliacaoModel.deletarAvaliacao(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar avaliação' });
  }
};
