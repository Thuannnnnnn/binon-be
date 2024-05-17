const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
require('dotenv').config();
var cors = require('cors')

let connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.error(err.message);

  console.log('Connected to the MySQL server.');
});
app.use(cors('shopcuathuan.shop'))
app.get('/api/hello', (req, res) => {
  let connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect((err) => {
    if (err) return res.send('err');

    res.send('Connected to the MySQL server.');
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})