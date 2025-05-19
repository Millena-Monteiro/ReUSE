// src/controllers/cupomController.js
import * as cupomModel from '../model/cupomModel.js';

export const getAllCupons = async (req, res) => {
  try {
    const cupons = await cupomModel.getAllCupons();
    res.json(cupons);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar cupons', erro: err.message });
  }
};

export const getCupomById = async (req, res) => {
  try {
    const cupom = await cupomModel.getCupomById(req.params.id);
    if (!cupom) {
      return res.status(404).json({ message: 'Cupom não encontrado' });
    }
    res.json(cupom);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar cupom', erro: err.message });
  }
};

export const createCupom = async (req, res) => {
  try {
    const { codigo, userID, valor, validade } = req.body;

    if (!codigo || !userID || !valor || !validade) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const novoCupom = await cupomModel.createCupom({
      codigo,
      userID,
      valor,
      validade,
      utilizado: false,
    });

    res.status(201).json(novoCupom);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar cupom', erro: err.message });
  }
};

export const updateCupom = async (req, res) => {
  try {
    const updated = await cupomModel.updateCupom(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(404).json({ message: 'Erro ao atualizar cupom', erro: err.message });
  }
};

export const deleteCupom = async (req, res) => {
  try {
    await cupomModel.deleteCupom(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: 'Erro ao deletar cupom', erro: err.message });
  }
};
