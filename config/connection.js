const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '919CoolidgeAve48017!',
    database: 'employee_db'
  }
);

module.exports = connection;