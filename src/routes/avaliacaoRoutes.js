import * as avaliacaoController from '../controller/avaliacaoController.js'; 
import express from 'express';

const router = express.Router();


// Rotas Avalicações
router.get('/', avaliacaoController.getAllAvaliacoes);
router.get('/:id', avaliacaoController.getAvaliacaoById);
router.post('/', avaliacaoController.createAvaliacao);
router.put('/:id', avaliacaoController. updateAvaliacao);
router.delete('/:id', avaliacaoController. deleteAvaliacao);

export default router;
