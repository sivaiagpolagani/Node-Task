var mysql = require('mysql');
var dbconfig = require('./db.config');


var connection = mysql.createConnection({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB
});

connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the database");
});

module.exports = connection;