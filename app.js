const express = require('express')
const app = express()
const port = 3000

app.get('/api/hello', (req, res) => {
  res.send('Hello World! la la la')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})