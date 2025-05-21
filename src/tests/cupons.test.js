// src/tests/cupons.test.js
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
  // seed usuário para FK
  await prisma.user.create({
    data: {
      id: '00000000-0000-0000-0000-000000000001',
      nome: 'Usuário Cupom',
      email: 'cupom@teste.com',
      senha_hash: 'hash',
      tipo_usuario: 'comum',
    },
  });
});
afterAll(async () => await prisma.$disconnect());

describe('CRUD /cupons', () => {
  let cupomId;
  const userId = '00000000-0000-0000-0000-000000000001';

  it('GET /cupons → 200 e array', async () => {
    const res = await request(app).get('/cupons');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /cupons válido → 201', async () => {
    const res = await request(app)
      .post('/cupons')
      .send({
        codigo: 'ABC123',
        userId,
        valor: 10.5,
        validade: '2025-12-31',
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    cupomId = res.body.id;
  });

  it('POST /cupons inválido (userId faltando) → 400', async () => {
    const res = await request(app)
      .post('/cupons')
      .send({ codigo: 'XYZ', valor: 5, validade: '2025-01-01' });
    expect(res.status).toBe(400);
  });

  it('GET /cupons/:id existente → 200', async () => {
    const res = await request(app).get(`/cupons/${cupomId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', cupomId);
  });

  it('GET /cupons/:id inexistente → 404', async () => {
    const res = await request(app).get('/cupons/00000000-0000-0000-0000-000000000000');
    expect(res.status).toBe(404);
  });

  it('PUT /cupons/:id → 200 e atualiza valor', async () => {
    const res = await request(app).put(`/cupons/${cupomId}`).send({ valor: 20 });
    expect(res.status).toBe(200);
    expect(res.body.valor).toBe(20);
  });

  it('DELETE /cupons/:id → 204', async () => {
    const res = await request(app).delete(`/cupons/${cupomId}`);
    expect(res.status).toBe(204);
  });
});
