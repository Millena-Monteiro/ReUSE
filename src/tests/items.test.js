import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import app from '../app.js';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Desabilita chaves estrangeiras temporariamente (SQLite)
  await prisma.$executeRawUnsafe('PRAGMA foreign_keys = OFF');
  await prisma.historico.deleteMany();
  await prisma.avaliacao.deleteMany();
  await prisma.item.deleteMany();
  await prisma.cupom.deleteMany();
  await prisma.user.deleteMany();
  await prisma.$executeRawUnsafe('PRAGMA foreign_keys = ON');

  // Cria usuário necessário para o item
  await prisma.user.create({
    data: {
      id: '00000000-0000-0000-0000-000000000100',
      nome: 'DonoItem',
      email: 'item@teste.com',
      senha_hash: 'hash',
      tipo_usuario: 'comum',
    },
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('CRUD /items', () => {
  let itemId;
  const userId = '00000000-0000-0000-0000-000000000100';
  const fakeId = '11111111-1111-1111-1111-111111111111';

  it('GET /items → 200 e array', async () => {
    const res = await request(app).get('/items');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /items válido → 201', async () => {
    const res = await request(app)
      .post('/items')
      .send({
        titulo: 'Livro',
        descricao: 'Bom estado',
        userId,
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.titulo).toBe('Livro');
    itemId = res.body.id;
  });

  it('POST /items inválido (sem título) → 400', async () => {
    const res = await request(app)
      .post('/items')
      .send({
        descricao: 'sem título',
        userId,
      });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Título, descrição e userId são obrigatórios.');
  });

  it('GET /items/:id existente → 200', async () => {
    const res = await request(app).get(`/items/${itemId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', itemId);
  });

  it('GET /items/:id inexistente → 404', async () => {
    const res = await request(app).get(`/items/${fakeId}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Item não encontrado');
  });

  it('PUT /items/:id atualiza descrição → 200', async () => {
    const res = await request(app)
      .put(`/items/${itemId}`)
      .send({ descricao: 'Ótimo estado' });

    expect(res.status).toBe(200);
    expect(res.body.descricao).toBe('Ótimo estado');
  });

  it('PUT /items/:id inexistente → 404', async () => {
    const res = await request(app)
      .put(`/items/${fakeId}`)
      .send({ descricao: 'Teste' });

    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Item não encontrado');
  });

  it('DELETE /items/:id existente → 204', async () => {
    const res = await request(app).delete(`/items/${itemId}`);
    expect(res.status).toBe(204);
  });

  it('GET /items/:id após delete → 404', async () => {
    const res = await request(app).get(`/items/${itemId}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Item não encontrado');
  });

  it('DELETE /items/:id inexistente → 404', async () => {
    const res = await request(app).delete(`/items/${fakeId}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Item não encontrado');
  });
});
