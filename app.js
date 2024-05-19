const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');
require('dotenv').config();
var cors = require('cors')
app.use(cors('shopcuathuan.shop'))
app.use(express.json())
const product = require('./routes/product')
app.use('/api/product', product)
app.get('/api/hello', (req, res) => {

  res.send('Connected to the MySQL server.');
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})