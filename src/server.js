import express from 'express';
import userRoutes from './routes/userRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/avaliacao', avaliacaoRoutes);


app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
