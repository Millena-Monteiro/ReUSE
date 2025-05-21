// src/tests/avaliacoes.test.js
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

  await prisma.user.create({
    data: {
      id: '00000000-0000-0000-0000-000000000010',
      nome: 'Avaliador',
      email: 'avaliador@teste.com',
      senha_hash: 'hash',
      tipo_usuario: 'comum',
    },
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('CRUD /avaliacao', () => {
  let avalId;
  const userId = '00000000-0000-0000-0000-000000000010';

  it('GET /avaliacao → 200 e retorna array', async () => {
    const res = await request(app).get('/avaliacao');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /avaliacao válido → 201 e retorna avaliação criada', async () => {
    const res = await request(app)
      .post('/avaliacao')
      .send({ nota: 5, comentario: 'Ótimo', userId });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    avalId = res.body.id;
  });

  it('POST /avaliacao inválido (nota faltando) → 400', async () => {
    const res = await request(app)
      .post('/avaliacao')
      .send({ comentario: 'sem nota', userId });
    expect(res.status).toBe(400);
  });

  it('GET /avaliacao/:id existente → 200 e retorna avaliação', async () => {
    const res = await request(app).get(`/avaliacao/${avalId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', avalId);
  });

  it('GET /avaliacao/:id inválido → 404', async () => {
    const res = await request(app).get('/avaliacao/00000000-0000-0000-0000-000000000000');
    expect(res.status).toBe(404);
  });

  it('PUT /avaliacao/:id → 200 e atualiza nota', async () => {
    const res = await request(app).put(`/avaliacao/${avalId}`).send({ nota: 3 });
    expect(res.status).toBe(200);
    expect(res.body.nota).toBe(3);
  });

  it('DELETE /avaliacao/:id → 204', async () => {
    const res = await request(app).delete(`/avaliacao/${avalId}`);
    expect(res.status).toBe(204);
  });
});
