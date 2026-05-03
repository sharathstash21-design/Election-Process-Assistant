const request = require('supertest');
const app = require('../server');

// Mock global fetch for Gemini API calls
global.fetch = jest.fn();

describe('API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 if no API key is provided', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ history: [], systemPrompt: "test" });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'API Key is missing');
  });

  it('should serve static HTML on root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });

  it('should return 200 and reply when API call is successful', async () => {
    const mockReply = "Hello from Gemini!";
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: mockReply }] } }]
      })
    });

    const res = await request(app)
      .post('/api/chat')
      .set('x-api-key', 'dummy-key')
      .send({ history: [{ role: 'user', parts: [{ text: 'hi' }] }], systemPrompt: "test" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('reply', mockReply);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle API errors appropriately', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => ({
        error: { message: "Invalid request payload" }
      })
    });

    const res = await request(app)
      .post('/api/chat')
      .set('x-api-key', 'dummy-key')
      .send({ history: [], systemPrompt: "test" });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid request payload');
  });

  it('should handle missing reply structure from Gemini gracefully', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        candidates: [] // Missing content
      })
    });

    const res = await request(app)
      .post('/api/chat')
      .set('x-api-key', 'dummy-key')
      .send({ history: [{ role: 'user', parts: [{ text: 'hi' }] }], systemPrompt: "test" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('reply', 'No response received.');
  });

  it('should return 500 on unexpected server errors', async () => {
    global.fetch.mockRejectedValueOnce(new Error("Network failure"));

    const res = await request(app)
      .post('/api/chat')
      .set('x-api-key', 'dummy-key')
      .send({ history: [{ role: 'user', parts: [{ text: 'hi' }] }], systemPrompt: "test" });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error', 'Internal Server Error');
  });
});
