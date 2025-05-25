/**
 * @swagger
 * tags:
 *   name: Avaliações
 *   description: Rotas para gerenciamento de avaliações
 */

/**
 * @swagger
 * /avaliacoes:
 *   get:
 *     summary: Lista todas as avaliações
 *     tags: [Avaliações]
 *     responses:
 *       200:
 *         description: Lista de avaliações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avaliacao'
 */

/**
 * @swagger
 * /avaliacoes/{id}:
 *   get:
 *     summary: Busca uma avaliação pelo ID
 *     tags: [Avaliações]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da avaliação
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Avaliação encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 *       404:
 *         description: Avaliação não encontrada
 */

/**
 * @swagger
 * /avaliacoes:
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Avaliacao'
 *     responses:
 *       201:
 *         description: Avaliação criada com sucesso
 */

/**
 * @swagger
 * /avaliacoes/{id}:
 *   put:
 *     summary: Atualiza uma avaliação existente
 *     tags: [Avaliações]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da avaliação
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Avaliacao'
 *     responses:
 *       200:
 *         description: Avaliação atualizada com sucesso
 *       404:
 *         description: Avaliação não encontrada
 */

/**
 * @swagger
 * /avaliacoes/{id}:
 *   delete:
 *     summary: Remove uma avaliação
 *     tags: [Avaliações]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da avaliação
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Avaliação removida com sucesso
 *       404:
 *         description: Avaliação não encontrada
 */


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
