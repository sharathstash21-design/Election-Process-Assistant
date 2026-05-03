const request = require('supertest');
const app = require('../server');

// Mock global fetch for testing Gemini API calls
global.fetch = jest.fn();

describe('API Endpoints', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should serve static HTML on root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });

  describe('POST /api/chat', () => {
    
    it('should return 401 if no API key is provided', async () => {
      const res = await request(app)
        .post('/api/chat')
        .send({ history: [], systemPrompt: "test" });
      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty('error', 'API Key is missing');
    });

    it('should return 200 and a reply when valid API call is made', async () => {
      // Mock successful fetch
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          candidates: [{
            content: { parts: [{ text: "Mock AI reply" }] }
          }]
        })
      });

      const res = await request(app)
        .post('/api/chat')
        .set('x-api-key', 'mock-key')
        .send({ history: [{role: 'user', parts: [{text: 'hello'}]}], systemPrompt: "test" });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('reply', 'Mock AI reply');
    });

    it('should handle API errors from Gemini (e.g., 400 Bad Request)', async () => {
      // Mock failed fetch
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        json: async () => ({
          error: { message: "API key not valid" }
        })
      });

      const res = await request(app)
        .post('/api/chat')
        .set('x-api-key', 'invalid-key')
        .send({ history: [], systemPrompt: "test" });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'API key not valid');
    });

    it('should handle missing error messages gracefully on Gemini failure', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 403,
        json: async () => ({}) // Empty error object
      });

      const res = await request(app)
        .post('/api/chat')
        .set('x-api-key', 'forbidden-key')
        .send({ history: [], systemPrompt: "test" });

      expect(res.statusCode).toEqual(403);
      expect(res.body).toHaveProperty('error', 'API error 403');
    });

    it('should return 500 on internal server errors (e.g. network failure)', async () => {
      global.fetch.mockRejectedValueOnce(new Error('Network failure'));

      const res = await request(app)
        .post('/api/chat')
        .set('x-api-key', 'valid-key')
        .send({ history: [], systemPrompt: "test" });

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('error', 'Internal Server Error');
    });

    it('should provide fallback reply if response structure is missing text', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ candidates: [{}] }) // No content.parts[0].text
      });

      const res = await request(app)
        .post('/api/chat')
        .set('x-api-key', 'mock-key')
        .send({ history: [], systemPrompt: "test" });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('reply', 'No response received.');
    });
  });
});
