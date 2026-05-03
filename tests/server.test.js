const request = require('supertest');
const app = require('../server');

describe('API Endpoints', () => {
  it('should return 401 if no API key is provided', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ history: [], systemPrompt: "test" });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error');
  });

  it('should serve static HTML on root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });
});
