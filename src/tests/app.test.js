import request from 'supertest';
import app from '../app.js'; 

describe('API ReUse+', () => {
  it('GET / deve retornar mensagem de funcionamento', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('API ReUse+ funcionando!');
  });
});
