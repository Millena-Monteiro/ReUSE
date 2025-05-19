import express from 'express';
import cupomRoutes from './routes/cupomRoutes.js';

const app = express();

app.use(express.json());

app.use('/cupons', cupomRoutes);

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});