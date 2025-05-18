import * as cupomModel from '../model/cupom.js';

export const getAllCupons = async (req, res) => {
  const cupons = await cupomModel.getAllCupons();
  res.json(cupons);
};

export const getCupomById = async (req, res) => {
  const cupom = await cupomModel.getCupomById(req.params.id);
  if (!cupom) return res.status(404).json({ message: 'Cupom não encontrado' });
  res.json(cupom);
};

export const createCupom = async (req, res) => {
  try {
    const { codigo, userID, valor, validade } = req.body;

    if (!codigo || !userID || !valor || !validade) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const newCupom = await cupomModel.createCupom({
      codigo,
      userID,
      valor,
      validade,
      utilizado: false, // default
    });

    res.status(201).json(newCupom);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar cupom', erro: err.message });
  }
};

export const updateCupom = async (req, res) => {
  try {
    const updatedCupom = await cupomModel.updateCupom(req.params.id, req.body);
    res.json(updatedCupom);
  } catch (err) {
    res.status(404).json({ message: 'Cupom não encontrado' });
  }
};

export const deleteCupom = async (req, res) => {
  try {
    await cupomModel.deleteCupom(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: 'Cupom não encontrado' });
  }
};
