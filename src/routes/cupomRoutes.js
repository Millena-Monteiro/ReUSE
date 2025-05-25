/**
 * @swagger
 * tags:
 *   name: Cupons
 *   description: Rotas para gerenciamento de cupons de desconto
 */

/**
 * @swagger
 * /cupons:
 *   get:
 *     summary: Lista todos os cupons
 *     tags: [Cupons]
 *     responses:
 *       200:
 *         description: Lista de cupons retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cupom'
 */

/**
 * @swagger
 * /cupons/{id}:
 *   get:
 *     summary: Busca um cupom pelo ID
 *     tags: [Cupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cupom
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cupom encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cupom'
 *       404:
 *         description: Cupom não encontrado
 */

/**
 * @swagger
 * /cupons:
 *   post:
 *     summary: Cria um novo cupom
 *     tags: [Cupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cupom'
 *     responses:
 *       201:
 *         description: Cupom criado com sucesso
 */

/**
 * @swagger
 * /cupons/{id}:
 *   put:
 *     summary: Atualiza um cupom existente
 *     tags: [Cupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cupom
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cupom'
 *     responses:
 *       200:
 *         description: Cupom atualizado com sucesso
 *       404:
 *         description: Cupom não encontrado
 */

/**
 * @swagger
 * /cupons/{id}:
 *   delete:
 *     summary: Remove um cupom
 *     tags: [Cupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cupom
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cupom removido com sucesso
 *       404:
 *         description: Cupom não encontrado
 */

import express from 'express';
import * as cupomControler from '../controller/cupomControler.js'; 


const router = express.Router();

// Rotas Cupom
router.get('/', cupomControler.getAllCupons);
router.get('/:id', cupomControler.getCupomById);
router.post('/', cupomControler.createCupom);
router.put('/:id', cupomControler.updateCupom);
router.delete('/:id', cupomControler.deleteCupom);


export default router;
