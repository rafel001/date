const express = require('express');
const app = express();
const port = 3000;

app.get('/api/date', (req, res) => {
  const now = new Date();

  res.json({
    date: now.toDateString(),

  });
});

app.listen(port, () => {
  console.log(`Date API running at http://localhost:${port}/api/date`);
});
