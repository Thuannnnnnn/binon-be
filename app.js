const express = require('express')
const app = express()
const port = 5000
const mysql = require('mysql2');
require('dotenv').config();
var cors = require('cors')
app.use(cors('shopcuathuan.shop'))
app.use(express.json())
const product = require('./routes/product')
app.use('/api/product', product)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})