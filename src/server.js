// server.js
import app from './app.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/SwaggerSpec.js';

const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
