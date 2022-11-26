const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use('/media', express.static('assets/covers'));

// Import data
const reviews = require('./data.json');

app.get('/api/reviews', (req, res) => {
  let i;
  let optionA, optionB;

  // Choose first album for a question
  i = Math.floor(Math.random() * reviews.length);
  optionA = reviews[i];

  const otherReviews = reviews.filter(r => r.id !== optionA.id);
  do {
    i = Math.floor(Math.random() * otherReviews.length);
    optionB = otherReviews[i];
  } while (optionA.score === optionB.score);

  res.json([optionA, optionB]);
})

app.get('/api/cover/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!id) { res.status(404).end(); return; };
  res.redirect(`/media/${id}.jpg`);
})


app.listen(3001, () => {
  console.log("Server running on port 3001.");
})
