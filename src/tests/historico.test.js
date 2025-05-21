import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import app from '../app.js';

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.historico.deleteMany();
  await prisma.avaliacao.deleteMany();
  await prisma.item.deleteMany();
  await prisma.cupom.deleteMany();
  await prisma.user.deleteMany();

  // Seed de usuários e item
  await prisma.user.create({
    data: {
      id: '00000000-0000-0000-0000-000000001000',
      nome: 'Doador',
      email: 'doador@teste.com',
      senha_hash: 'hash',
      tipo_usuario: 'comum',
    },
  });

  await prisma.user.create({
    data: {
      id: '00000000-0000-0000-0000-000000002000',
      nome: 'Receptor',
      email: 'receptor@teste.com',
      senha_hash: 'hash',
      tipo_usuario: 'comum',
    },
  });

  await prisma.item.create({
    data: {
      id: '00000000-0000-0000-0000-000000010000',
      titulo: 'Mesa',
      descricao: 'Sem uso',
      userId: '00000000-0000-0000-0000-000000001000',
    },
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('CRUD /api/historicos', () => {
  let histId;
  const doador = '00000000-0000-0000-0000-000000001000';
  const receptor = '00000000-0000-0000-0000-000000002000';
  const itemId = '00000000-0000-0000-0000-000000010000';

  it('GET /api/historicos → 200 e array', async () => {
    const res = await request(app).get('/api/historicos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/historicos válido → 201', async () => {
    const res = await request(app)
      .post('/api/historicos')
      .send({
        item_id: itemId,
        doador_id: doador,
        receptor_id: receptor,
        data_transacao: new Date().toISOString(),
        tipo: 'doação',
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    histId = res.body.id;
  });

  it('POST /api/historicos inválido (campo faltando) → 400', async () => {
    const res = await request(app)
      .post('/api/historicos')
      .send({
        item_id: itemId,
        doador_id: doador,
        // receptor_id faltando
        data_transacao: new Date().toISOString(),
        tipo: 'doação',
      });
    expect(res.status).toBe(400);
  });

  it('GET /api/historicos/:id existente → 200', async () => {
    const res = await request(app).get(`/api/historicos/${histId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', histId);
  });

  it('GET /api/historicos/:id inexistente → 404', async () => {
    const res = await request(app).get('/api/historicos/00000000-0000-0000-0000-000000000000');
    expect(res.status).toBe(404);
  });

  it('PUT /api/historicos/:id → 200 e atualiza tipo', async () => {
    const res = await request(app)
      .put(`/api/historicos/${histId}`)
      .send({ tipo: 'troca' });
    expect(res.status).toBe(200);
    expect(res.body.tipo).toBe('troca');
  });

  it('DELETE /api/historicos/:id → 204', async () => {
    const res = await request(app).delete(`/api/historicos/${histId}`);
    expect(res.status).toBe(204);
  });

  it('GET após DELETE → 404', async () => {
    const res = await request(app).get(`/api/historicos/${histId}`);
    expect(res.status).toBe(404);
  });
});
