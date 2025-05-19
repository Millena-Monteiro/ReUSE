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
