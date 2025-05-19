import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import itemroutes from './routes/itemroutes.js';
import router from './routes/reuseRoutes.routes.js';
import cupomRoutes from './routes/cupomRoutes.js';

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/users', userRoutes);
app.use('/avaliacao', avaliacaoRoutes);
app.use('/itens', itemroutes);
app.use('/cupons', cupomRoutes);
app.use('/api', router);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API ReUse+ funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
