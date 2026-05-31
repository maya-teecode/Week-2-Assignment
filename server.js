const express = require('express')
const app = express()
const port = 3000

app.get('/mayt', (req, res) => {
  res.send('Hello From Maya!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})