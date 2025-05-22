import {
  criarPagamento,
  listarPagamentos,
  getPagamentoPorId,
  atualizarPagamento,
  deletarPagamento
} from '../model/PagamentoModel.js';

export const postPagamento = async (req, res) => {
  try {
    const pagamento = await criarPagamento(req.body);
    res.status(201).json(pagamento);
  } catch (e) {
    res.status(e.code || 400).json({ erro: e.message });
  }
};

export const getPagamentos = async (req, res) => {
  try {
    const lista = await listarPagamentos();
    res.json(lista);
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
};

export const getPagamento = async (req, res) => {
  try {
    const pagamento = await getPagamentoPorId(req.params.id);
    if (!pagamento) return res.status(404).json({ erro: 'Pagamento não encontrado' });
    res.json(pagamento);
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
};

export const putPagamento = async (req, res) => {
  try {
    const pagamento = await atualizarPagamento(req.params.id, req.body);
    res.json(pagamento);
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
};

export const deletePagamento = async (req, res) => {
  try {
    await deletarPagamento(req.params.id);
    res.json({ mensagem: 'Pagamento deletado com sucesso' });
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
};
