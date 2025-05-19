import express from 'express';
import reuseController from '../controller/reuse.controller.js';

const router = express.Router();

// Rota para ler os históricos
router.get('/historicos', reuseController.getHistoricos);

// Rota para atualizar um histórico
router.put('/historicos/:id', reuseController.updateHistorico);

// Rota para criar um histórico
router.post('/historicos', reuseController.createHistorico);

// Rota para deletar um histórico
router.delete('/historicos/:id', reuseController.deleteHistorico);

export default router;

