const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {
  return res.json([
    'Inglês',
    'Backend',
    'Frontend'
  ]);
});

app.post('/courses', (req, res) => {
  return res.json([
    'Inglês',
    'Backend',
    'Frontend',
    'Fullstack'
  ]);
})

app.put('/courses/:id', (req, res) => {
  return res.json([
    'Inglês Técnico',
    'Backend',
    'Frontend',
    'Fullstack'
  ]);
});

app.patch('/courses/:id', (req, res) => {
  return res.json([
    'Inglês',
    'Backend',
    'Frontend',
    'Fullstack'
  ]);
});

app.delete('/courses/:id', (req, res) => {
  return res.json([
    'Backend', 
    'Frontend',
    'Fullstack'
  ]);
});

app.listen(3333);