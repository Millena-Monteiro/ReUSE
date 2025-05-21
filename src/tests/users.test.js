// src/tests/users.test.js
import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import app from '../app.js';

const prisma = new PrismaClient();

beforeAll(async () => {
  // teardown em cascata
  await prisma.historico.deleteMany();
  await prisma.avaliacao.deleteMany();
  await prisma.item.deleteMany();
  await prisma.cupom.deleteMany();
  await prisma.user.deleteMany();
});
afterAll(async () => await prisma.$disconnect());

describe('CRUD /users', () => {
  let userId;

  it('GET /users → 200 e retorna array', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /users válido → 201 e retorna user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ nome: 'João', email: 'joao@test.com', senha: '123456' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    userId = res.body.id;
  });

  it('POST /users inválido → 400', async () => {
    const res = await request(app).post('/users').send({ nome: '' });
    expect([400, 422]).toContain(res.status);
  });

  it('GET /users/:id existente → 200', async () => {
    const res = await request(app).get(`/users/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', userId);
  });

  it('GET /users/:id inexistente → 404', async () => {
    const res = await request(app).get('/users/00000000-0000-0000-0000-000000000000');
    expect(res.status).toBe(404);
  });

  it('PUT /users/:id → 200 e atualiza nome', async () => {
    const res = await request(app)
      .put(`/users/${userId}`)
      .send({ nome: 'Maria' });
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Maria');
  });

  it('DELETE /users/:id → 204', async () => {
    const res = await request(app).delete(`/users/${userId}`);
    expect(res.status).toBe(204);
  });
});
