import express from 'express';
import {
  criarPagamento,
  listarPagamentos,
  atualizarPagamento,
  deletarPagamento
} from '../controller/pagamentoController.js';

const router = express.Router();

router.post('/', criarPagamento);
router.get('/', listarPagamentos);
router.put('/:id', atualizarPagamento);
router.delete('/:id', deletarPagamento);

export default router;
