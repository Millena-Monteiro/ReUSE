import express from 'express';
import cupomRoutes from './src/routes/cupomRoutes.js'; 

const app = express();
app.use(express.json());

app.use('/cupons', cupomRoutes); 

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
