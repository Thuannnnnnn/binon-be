const express = require('express')
const app = express()
const port = 3000

app.get('/api/hello', (req, res) => {
  res.send('data đã deploy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})