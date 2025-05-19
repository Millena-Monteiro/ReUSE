import express from 'express';
import userRoutes from './routes/userRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/avaliacao', avaliacaoRoutes);

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
