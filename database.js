const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({path: './.env'})
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'dbmsproject'
});
exports.conn = conn