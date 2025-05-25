//documentação swagger da rotas 
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API ReUse+',
        version: '1.0.0',
        description: 'Documentação da API do sistema ReUse+',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local',
        },
    ],
    components: {
        schemas: {
            Avaliacao: {
                type: 'object',
                required: ['itemId', 'usuarioId', 'comentario', 'nota'],
                properties: {
                    id: { type: 'string' },
                    itemId: { type: 'string' },
                    usuarioId: { type: 'string' },
                    comentario: { type: 'string' },
                    nota: { type: 'number', format: 'float' },
                },
            },
            Cupom: {
                type: 'object',
                required: ['codigo', 'desconto'],
                properties: {
                    id: { type: 'string' },
                    codigo: { type: 'string' },
                    desconto: { type: 'number' },
                    validoAte: { type: 'string', format: 'date-time' },
                },
            },
            Item: {
                type: 'object',
                required: ['nome', 'descricao'],
                properties: {
                    id: { type: 'string' },
                    nome: { type: 'string' },
                    descricao: { type: 'string' },
                    status: { type: 'string' },
                },
            },
            Pagamento: {
                type: 'object',
                required: ['usuarioId', 'valor', 'data'],
                properties: {
                    id: { type: 'string' },
                    usuarioId: { type: 'string' },
                    valor: { type: 'number' },
                    data: { type: 'string', format: 'date-time' },
                },
            },
            Historico: {
                type: 'object',
                required: ['usuarioId', 'itemId', 'acao', 'data'],
                properties: {
                    id: { type: 'string' },
                    usuarioId: { type: 'string' },
                    itemId: { type: 'string' },
                    acao: { type: 'string' },
                    data: { type: 'string', format: 'date-time' },
                },
            },
            Usuario: {
                type: 'object',
                required: ['nome', 'email'],
                properties: {
                    id: { type: 'string' },
                    nome: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                    createdAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: [
        './src/routes/avaliacaoRoutes.js',
        './src/routes/cupomRoutes.js',
        './src/routes/itemroutes.js',
        './src/routes/pagamentoRoutes.js',
        './src/routes/reuseRoutes.routes.js',
        './src/routes/userRoutes.js',
    ],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };

