import express from 'express';
import {
  postPagamento,
  getPagamentos,
  getPagamento,
  putPagamento,
  deletePagamento
} from '../controller/pagamentoController.js';

const router = express.Router();

router.post('/', postPagamento);
router.get('/', getPagamentos);
router.get('/:id', getPagamento);
router.put('/:id', putPagamento);
router.delete('/:id', deletePagamento);

export default router;
