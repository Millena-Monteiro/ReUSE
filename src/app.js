// app.js
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import itemroutes from './routes/itemroutes.js';
import router from './routes/reuseRoutes.routes.js';
import cupomRoutes from './routes/cupomRoutes.js';
import pagamentoRoutes from './routes/pagamentoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/users', userRoutes);
app.use('/avaliacao', avaliacaoRoutes);
app.use('/items', itemroutes);
app.use('/cupons', cupomRoutes);
app.use('/api', router);
app.use('/pagamentos', pagamentoRoutes);


// Rota raiz
app.get('/', (req, res) => {
  res.send('API ReUse+ funcionando!');
});

export default app;
