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
const connectionString = 'postgres://dbmasteruser:08B97M28v8MXjtTcg9TTG@ls-3ac7a30ccbf1cb6f6b71a06b8245912da6a0d4a3.cgg9z13knhkq.us-west-2.rds.amazonaws.com:5432/dbmaster'
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

app.post('/createAccount', function (req, res) {
  console.log('went in!');
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const email = req.body.email;
  const plan = req.body.plan;
  const comp = req.body.companyName;
  const zip = req.body.zipCode;
  const company = req.body.company;
  const usstate = req.body.USstate;
  const compId = req.body.id
  const dateCreated = new Date();
  console.log('plan ' + plan);
  console.log('firstName ' + firstName);
  console.log('lastName ' + lastName);
  console.log('email ' + email);
  console.log('password ' + password);
  console.log('zipcode: ' + zip);
  console.log('compId' + compId);
  console.log('usState' + usstate);


  let users = 0;
  let no_users = 0;
  if (plan === 'Existing Plan') {
    console.log('went into if');

    client.query('INSERT INTO "public"."user_table" ("company_id", "first_name","last_name","email","password","plan_type", "date_created") VALUES($1, $2, $3, $4, $5, $6, $7)',
      [compId, firstName, lastName, email, password, plan, dateCreated], function (err, result) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        console.log('adding user');
        // return res.json(result);
      });

    client.query('UPDATE "public"."company_table" SET no_users = no_users + 1 WHERE company_id = $1', [compId],
      function (err, result) {
        if (err) {
          console.log('there is an error');
          console.log(err);
          res.sendStatus(500);
          return;
        }
        console.log('updating users');
        console.log(result);
        // return res.send('successfully');
      });
  }
  else {

    client.query('INSERT INTO "public"."company_table" ("company_name", "company_type","state","no_docs_used","company_zip","no_users") VALUES($1, $2, $3, $4, $5, $6)',
      [comp, company, usstate, 0, zip, (no_users + 1)], function (err, result) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        // return res.json(result);
      });



    client.query('SELECT company_id from "public"."company_table" where company_name = $1',
      [comp], function (err, result) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        console.log(result);
        let get_id = (result.rows[0].company_id);
        console.log(get_id);
        client.query('INSERT INTO "public"."user_table" ("company_id", "first_name","last_name","email","password","plan_type", "date_created") VALUES($1, $2, $3, $4, $5, $6, $7)',
          [get_id,

            firstName, lastName, email, password, plan, dateCreated], function (err, result) {
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              }
              console.log('in here!');
              // return res.json(result);
            });
        // return res.send('successfully');

      })
  }

});

app.post('/getUser', function (req, res) {
  const email = req.body.email;
  console.log('email:' + email);
  const password = req.body.password;
  console.log('password: ' + password);
  console.log(email)
  client.query('SELECT * from public.user_table where email=$1',
    [email], function (error, results, fields) {
      if (error) {
        throw error;
        // res.send({
        //   "code": 400,
        //   "failed": "error ocurred"
        // })
      } else {
        if (results.rowCount > 0) {
          const comparison = password === (results.rows[0].password);
          if (comparison) {
            res.send({
              "code": 200,
              "success": "login sucessful"
            })
          }
          else {
            res.send({
              "code": 204,
              "success": "Email and password do not match"
            })
          }
        }
        else {
          res.send({
            "code": 206,
            "success": "Email does not exist"
          });
        }
      }
    });

});

/*
app.get('/getCompanyInfo', function(req, res) {
  const email = req.body.email;
  client.query('SELECT company_id FROM public.user_table where email=$1', [email], 
  function(err, result){
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } 
    console.log(result);
    let get_id = (result.rows[0].company_id);
    client.query('SELECT * FROM public.company_table where company_id=$1', [get_id], function(error, table) {

      if (error){
        throw error;
      } else {
        console.log(table);
        res.send(table.rows);
        res.send()
      }
    });


  })
});
*/


app.get('/getCompanyInfo', function(req, res) {
  client.query('SELECT * FROM public.company_table where company_id=1', function(error, table) {
    if (error){
      throw error;
    } else {
      console.log(table);
      res.send(table.rows);
    //  res.send()
    }
  });

});

app.get('/getListUsers', function(req, res) {
  client.query('SELECT * FROM public.user_table where company_id=1', function(error, table){
    if (error) {
      res.sendStatus(500);
      return;
    } else {
      console.log(results);
      res.send(table.rows);
    }
  })
})




// client.end();
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })