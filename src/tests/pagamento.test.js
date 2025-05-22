import request from 'supertest';
import app from '../app.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Testes da API de Pagamentos (sem autenticação)', () => {
  let user;
  let pagamentoId;

  beforeAll(async () => {
    // Cria um usuário para vincular aos pagamentos
    user = await prisma.user.create({
      data: {
        nome: 'Usuário de Teste',
        email: `teste_${Date.now()}@exemplo.com`,
        senha_hash: 'senha_fake_hash',
        tipo_usuario: 'usuario'
      }
    });
  });

  afterAll(async () => {
    // Limpa registros após testes
    await prisma.pagamento.deleteMany({ where: { userId: user.id } });
    await prisma.user.delete({ where: { id: user.id } });
    await prisma.$disconnect();
  });

  test('POST /pagamentos - deve criar um novo pagamento', async () => {
    const res = await request(app).post('/pagamentos').send({
      valor: 123.45,
      metodo: 'cartao',
      status: 'pendente',
      userId: user.id
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.valor).toBe(123.45);
    expect(res.body.metodo).toBe('cartao');

    pagamentoId = res.body.id;
  });

  test('GET /pagamentos - deve listar os pagamentos', async () => {
    const res = await request(app).get('/pagamentos');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some(p => p.id === pagamentoId)).toBe(true);
  });

  test('GET /pagamentos/:id - deve retornar um pagamento específico', async () => {
    const res = await request(app).get(`/pagamentos/${pagamentoId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', pagamentoId);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('email', user.email);
  });

  test('PUT /pagamentos/:id - deve atualizar o status do pagamento', async () => {
    const res = await request(app)
      .put(`/pagamentos/${pagamentoId}`)
      .send({ status: 'concluido' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('concluido');
  });

  test('DELETE /pagamentos/:id - deve deletar o pagamento', async () => {
    const res = await request(app).delete(`/pagamentos/${pagamentoId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('mensagem', 'Pagamento deletado com sucesso');
  });

  test('GET /pagamentos/:id - deve retornar 404 para pagamento deletado', async () => {
    const res = await request(app).get(`/pagamentos/${pagamentoId}`);

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('erro', 'Pagamento não encontrado');
  });
});
