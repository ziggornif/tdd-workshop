const express = require('express');
const words = require('./words');

const app = express();

app.get('/api/words/count/', async (req, res) => {
  const count = await words.count(req.query.text);
  res.json({ count });
});

app.listen(3000, () => {
  console.log('🚀 Server listening on http://localhost:3000');
});
