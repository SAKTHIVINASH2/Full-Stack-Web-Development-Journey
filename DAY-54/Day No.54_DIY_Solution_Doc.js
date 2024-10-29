const express = require('express');

const app = express();
const PORT = 8900;

app.get('/', (req, res) => {
  res.send('Hello World'); 
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/filter', (req, res) => {
  res.send('Filter Page');
});

app.get('/details', (req, res) => {
  res.send('Details Page');
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
