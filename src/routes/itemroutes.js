/**
 * @swagger
 * tags:
 *   name: Itens
 *   description: Rotas para gerenciamento de itens
 */

/**
 * @swagger
 * /itens:
 *   get:
 *     summary: Lista todos os itens
 *     tags: [Itens]
 *     responses:
 *       200:
 *         description: Lista de itens retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */

/**
 * @swagger
 * /itens/{id}:
 *   get:
 *     summary: Busca um item pelo ID
 *     tags: [Itens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item não encontrado
 */

/**
 * @swagger
 * /itens:
 *   post:
 *     summary: Cria um novo item
 *     tags: [Itens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Item criado com sucesso
 */

/**
 * @swagger
 * /itens/{id}:
 *   put:
 *     summary: Atualiza um item existente
 *     tags: [Itens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso
 *       404:
 *         description: Item não encontrado
 */

/**
 * @swagger
 * /itens/{id}:
 *   delete:
 *     summary: Remove um item
 *     tags: [Itens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Item removido com sucesso
 *       404:
 *         description: Item não encontrado
 */

import express from 'express';
import * as itemController from '../controller/itemController.js';

const router = express.Router();

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

export default router;