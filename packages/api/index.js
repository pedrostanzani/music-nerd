const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());

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


app.listen(3001, () => {
  console.log("Server running on port 3001.");
})
