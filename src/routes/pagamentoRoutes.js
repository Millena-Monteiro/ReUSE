/**
 * @swagger
 * tags:
 *   name: Pagamentos
 *   description: Rotas para gerenciamento de pagamentos
 */

/**
 * @swagger
 * /pagamentos:
 *   get:
 *     summary: Lista todos os pagamentos
 *     tags: [Pagamentos]
 *     responses:
 *       200:
 *         description: Lista de pagamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pagamento'
 */

/**
 * @swagger
 * /pagamentos/{id}:
 *   get:
 *     summary: Busca um pagamento pelo ID
 *     tags: [Pagamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pagamento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pagamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pagamento'
 *       404:
 *         description: Pagamento não encontrado
 */

/**
 * @swagger
 * /pagamentos:
 *   post:
 *     summary: Cria um novo pagamento
 *     tags: [Pagamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       201:
 *         description: Pagamento criado com sucesso
 */

/**
 * @swagger
 * /pagamentos/{id}:
 *   put:
 *     summary: Atualiza um pagamento existente
 *     tags: [Pagamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pagamento
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       200:
 *         description: Pagamento atualizado com sucesso
 *       404:
 *         description: Pagamento não encontrado
 */

/**
 * @swagger
 * /pagamentos/{id}:
 *   delete:
 *     summary: Remove um pagamento
 *     tags: [Pagamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pagamento
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Pagamento removido com sucesso
 *       404:
 *         description: Pagamento não encontrado
 */

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
