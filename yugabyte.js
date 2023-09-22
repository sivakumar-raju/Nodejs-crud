// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',         
//     user: 'root',
//     password: 'Agilysysbook@3338', 
//     database: 'authentication' 
//   });
// connection.connect(function(err) {
//     if (err) throw err;
// });

// module.exports = connection;

const Pool = require('pg').Pool // import pg pool instance
const pool = new Pool({
  user: 'admin', // username 'postgres' by default
  password: 'Siva30060@', // password of psql
  host: 'ap-south-1.c1222fdf-e0e6-495e-9fe5-bd1e90fde0e4.aws.ybdb.io',  // host name
  port: 5433, // port number, 5432 by default
  database: 'postgres', // database name
});
// export the configuration
module.exports = pool;