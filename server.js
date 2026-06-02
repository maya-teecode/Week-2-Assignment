const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json()) // Middleware to parse JSON bodies
console.log('Hello from Express.js!');  

app.use((req, res, next) => {
  console.log('Request received:', `${req.url}, Method: ${req.method}, Time: ${new Date().toISOString()}`);
  next();
});
app.use((req, res, next) => {
  console.log('hello from the second middleware');
  next();
});     

app.post('/data', (req, res) => {
  console.log(req.body);
  res.json({ echoed: req.body });
});
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(`User ID received: ${id}`);
  res.send(`Hello From Maya! User ID: ${req.params.id}`)
}); 

app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(`User ID received: ${id}`);
  res.send(`Hello From Maya! searching for ${req.params.id}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


