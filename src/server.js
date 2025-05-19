<<<<<<< HEAD
<<<<<<< HEAD
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
=======
import express from 'express';
import cupomRoutes from './routes/cupomRoutes.js';
>>>>>>> Mateus

const app = express();

app.use(express.json());

<<<<<<< HEAD
app.use('/users', userRoutes);
app.use('/avaliacao', avaliacaoRoutes);


app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
=======
import itemroutes from './routes/itemroutes.js'
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Usar rotas
app.use('/itens', itemroutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API ReUse+ funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
>>>>>>> bia
=======
app.use('/cupons', cupomRoutes);

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
>>>>>>> Mateus
