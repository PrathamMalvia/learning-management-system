const sql = require('mysql');
const util = require("util");
const dotenv = require("dotenv").config()

const db = sql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


// // Ping database to check for common exception errors.
// db.getConnection((err, connection) => {
//     if (err) {
//         if (err.code === "PROTOCOL_CONNECTION_LOST") {
//             console.error("Database connection was closed.");
//         }
//         if (err.code === "ER_CON_COUNT_ERROR") {
//             console.error("Database has too many connections.");
//         }
//         if (err.code === "ECONNREFUSED") {
//             console.error("Database connection was refused.");
//         }
//     }

//     if (connection) connection.release();

//     return;
// });

// Promisify for Node.js async/await.
db.query = util.promisify(db.query);

module.exports = db;
