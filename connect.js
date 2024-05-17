const mysql = require('mysql2');
require('dotenv').config();

let connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        return console.error('Error connecting to the MySQL server: ', err.message);
    }
    console.log('Connected to the MySQL server.');

    // Truy vấn để lấy dữ liệu từ bảng users
    const query = 'SELECT * FROM users';

    connection.query(query, (err, results, fields) => {
        if (err) {
            console.error('Error executing query: ', err.message);
            return;
        }
        console.log('Data from users table:');
        console.log(results);

        // Đóng kết nối sau khi hoàn thành truy vấn
        connection.end((err) => {
            if (err) {
                return console.log('Error ending the connection: ', err.message);
            }
            console.log('Connection closed.');
        });
    });
});