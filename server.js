const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/chat', async (req, res) => {
  try {
    const { history, systemPrompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || req.headers['x-api-key'];
    
    if (!apiKey) {
      return res.status(401).json({ error: 'API Key is missing' });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: history
      })
    });

    if (!response.ok) {
       const errorData = await response.json();
       const errorMessage = errorData.error?.message || `API error ${response.status}`;
       return res.status(response.status).json({ error: errorMessage });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';
    res.json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 8080;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
