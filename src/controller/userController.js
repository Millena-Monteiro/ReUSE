import * as userModel from '../model/userModel.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuario Não encontrado' });
  res.json(user);
};

export const createUser = async (req, res) => {
try {
    const { nome, email, senha, tipo_usuario } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    const newUser = await userModel.createUser({
      nome,
      email,
      senha_hash,
      tipo_usuario: tipo_usuario || 'comum', 
    });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar usuário', erro: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.updateUser(req.params.id, req.body);
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', erro: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userModel.deleteUser(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: 'Usuario não encontrado' });
  }
};
