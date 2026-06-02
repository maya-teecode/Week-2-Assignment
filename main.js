const express = require('express')
const app = express()
require('dotenv').config() 
const port = process.env.PORT  

app.use(express.json()) // Middleware to parse JSON bodies


app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ 'error': 'Name and email are required' });
  }
  console.log(req.body);
  res.json({ 'message': `Hello, ${name}!` });
});


app.use((req, res, next) => {
  console.log('Request received:', `${req.url}, Method: ${req.method}, Time: ${new Date().toISOString()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('My Week 2 API!')
}); 


app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(`User ID received: ${id}`);
  res.send(` User ID: ${id} profile`)
});


app.listen(port, () => {
  console.log(`server app listening on port ${port}`)
});