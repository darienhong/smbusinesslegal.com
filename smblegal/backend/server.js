// var express = require('express');
// var bodyParser = require('body-parser');

// // var socket = require('socket.io');
// const { Client } = require('pg');

// // Postgres
// const client = new Client({
//   connectionString: "postgres://dbmasteruser:+08B?##97M2%8v8M*Xj]^}t:T%cg9TTG@ls-3ac7a30ccbf1cb6f6b71a06b8245912da6a0d4a3.cgg9z13knhkq.us-west-2.rds.amazonaws.com:5432/SMBLegal",
// });

// client.connect((err) => {
//   if (err) console.log("Postgres connection error: " + err)
// });






const { Pool, Client } = require('pg')
const connectionString = 'postgres://dbmasteruser:08B97M28v8MXjtTcg9TTG@ls-3ac7a30ccbf1cb6f6b71a06b8245912da6a0d4a3.cgg9z13knhkq.us-west-2.rds.amazonaws.com:5432/postgres'
var express = require('express');
var bodyParser = require('body-parser');

// const pool = new Pool({
//   connectionString: connectionString,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
const client = new Client({
  connectionString: connectionString,
})

client.connect((err) => {
  if (err) console.log("Postgres connection error: " + err)
});

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors())


// Start server
const PORT = 5000;
var server = app.listen(PORT, function () {
  console.log(`API is running on Port ${PORT}`);
});

app.get('/getPort', function (req, res) {
  console.log("reached get port");
  console.log("PORT = " + PORT);
  res.send(`${PORT}`);
});

app.post('/users', function (req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = client.query('INSERT INTO user_table SET ?', user, function (err, result) {
    // Neat!
  });
  res.end('Success');
});

// client.end();
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })