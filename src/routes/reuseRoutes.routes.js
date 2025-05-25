/**
 * @swagger
 * tags:
 *   name: Histórico
 *   description: Rotas para gerenciamento do histórico de reutilizações
 */

/**
 * @swagger
 * /historicos:
 *   get:
 *     summary: Lista todos os históricos
 *     tags: [Histórico]
 *     responses:
 *       200:
 *         description: Lista de históricos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Historico'
 */

/**
 * @swagger
 * /historicos:
 *   post:
 *     summary: Cria um novo histórico
 *     tags: [Histórico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Historico'
 *     responses:
 *       201:
 *         description: Histórico criado com sucesso
 */

/**
 * @swagger
 * /historicos/{id}:
 *   put:
 *     summary: Atualiza um histórico existente
 *     tags: [Histórico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do histórico
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Historico'
 *     responses:
 *       200:
 *         description: Histórico atualizado com sucesso
 *       404:
 *         description: Histórico não encontrado
 */

/**
 * @swagger
 * /historicos/{id}:
 *   delete:
 *     summary: Remove um histórico
 *     tags: [Histórico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do histórico
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Histórico removido com sucesso
 *       404:
 *         description: Histórico não encontrado
 */

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

