const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDEnzgVkdBHlWeVuE5rJ7JKv_aiwJ5TeQ';
const systemPrompt = "test";
const history = [{ role: 'user', parts: [{ text: 'test' }] }];

fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: history
      })
    })
.then(res => res.json().then(data => ({status: res.status, data})))
.then(console.log)
.catch(console.error);
