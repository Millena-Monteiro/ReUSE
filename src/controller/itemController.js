import * as itemModel from '../model/itemModel.js';

// Buscar 
export const getAllItems = async (req, res) => {
  try {
    const itens = await itemModel.getAllItems();
    res.json(itens);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar itens', erro: err.message });
  }
};

// Buscar item por ID
export const getItemById = async (req, res) => {
  try {
    const item = await itemModel.getItemById(Number(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item não encontrado' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar item', erro: err.message });
  }
};

// Criar novo item
export const createItem = async (req, res) => {
  try {
    const { titulo, descricao, status, userId } = req.body;

    if (!titulo || !descricao || !userId) {
      return res.status(400).json({ message: 'Título, descrição e userId são obrigatórios.' });
    }

    const newItem = await itemModel.createItem({
      titulo,
      descricao,
      status: status || 'disponível',
      userId, // passa para o model
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(err.code || 500).json({ message: 'Erro ao criar item', erro: err.message });
  }
};

// Atualizar item
export const updateItem = async (req, res) => {
  try {
    const updatedItem = await itemModel.updateItem(Number(req.params.id), req.body);
    res.json(updatedItem);
  } catch (err) {
    res.status(404).json({ message: 'Item não encontrado' });
  }
};

// Deletar item
export const deleteItem = async (req, res) => {
  try {
    await itemModel.deleteItem(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: 'Item não encontrado' });
  }
};