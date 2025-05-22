import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const criarPagamento = async (req, res) => {
  try {
    const novo = await prisma.pagamento.create({
      data: req.body,
    });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
};

export const listarPagamentos = async (req, res) => {
  try {
    const todos = await prisma.pagamento.findMany();
    res.json(todos);
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
};

export const atualizarPagamento = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const pagamentoExistente = await prisma.pagamento.findUnique({ where: { id } });
    if (!pagamentoExistente) return res.status(404).json({ erro: 'Pagamento não encontrado' });

    const atualizado = await prisma.pagamento.update({
      where: { id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
};

export const deletarPagamento = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const pagamentoExistente = await prisma.pagamento.findUnique({ where: { id } });
    if (!pagamentoExistente) return res.status(404).json({ erro: 'Pagamento não encontrado' });

    await prisma.pagamento.delete({ where: { id } });
    res.json({ mensagem: 'Pagamento deletado' });
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
};
