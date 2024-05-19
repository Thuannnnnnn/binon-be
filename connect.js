const mysql = require('mysql2/promise');
require('dotenv').config();

async function createConnection() {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
}

async function query(sql, params = []) {
    const connection = await createConnection();
    try {
        const results = await connection.execute(sql, params);
        return results;
    } catch (error) {
        throw error;
    } finally {
        await connection.end();
    }
}

module.exports = { query };
