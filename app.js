const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2/promise');
require('dotenv').config();
var cors = require('cors')
app.use(cors('shopcuathuan.shop'))
app.use(express.json())
const product = require('./routes/product')
const upload = require('./routes/upload')
const auth = require('./routes/auth')
app.use('/api/product', product)
app.use('/api/upload', upload)
app.use('/api/auth', auth)
app.get('/api/hello', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    res.send('Connected to the MySQL server.1');
    connection.end(); // Close the connection
  } catch (error) {
    res.send('Error connecting to the MySQL server: ' + error.message + process.env.DB_HOST);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})