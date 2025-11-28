const request = require('supertest');
const app = require('../app');
describe('API /api/items', () => {
  test('GET /api/items returns array', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  test('GET /api/items/1 returns item', async () => {
    const res = await request(app).get('/api/items/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });
  test('GET /api/items/999 returns 404', async () => {
    const res = await request(app).get('/api/items/999');
    expect(res.statusCode).toBe(404);
  });
  test('POST /api/items creates item', async () => {
    const res = await request(app).post('/api/items').send({ name: 'gamma' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', 'gamma');
  });
  test('POST /api/items without name returns 400', async () => {
    const res = await request(app).post('/api/items').send({});
    expect(res.statusCode).toBe(400);
  });
});
