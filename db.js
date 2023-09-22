const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',         
    user: 'root',
    password: 'Agilysysbook@3338', 
    database: 'authentication' 
  });
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;