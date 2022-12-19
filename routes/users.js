const express = require('express');
const router = express.Router();

/* mysql */
const mysql = require('mysql');
const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

con.connect((err) => {
  if (err) throw err
  console.log('Connected');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  con.query('select * from users', (err, result) => {
    if(err) throw err;
    return res.json(result);
  });
});

module.exports = router;
