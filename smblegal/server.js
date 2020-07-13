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

app.post('/addDoc', function (req, res) {
  console.log('went in!');
  const type = req.body.type;
  const file = req.body.file;
  const email = req.body.email;
  console.log(type);
  console.log(file);
  console.log('email: ' + email)
  const dateCreated = new Date();
  // client.query('INSERT INTO "public"."document_table" ( "doc_type", "company_id", "doc") VALUES ($1, $2, $3)',
  //   [type, 1, file], function (err, result) {
  //     if (err) {
  //       console.log(err);
  //       res.sendStatus(500);
  //       return;
  //     }
  //     console.log('in here!');
  //   });
  client.query('SELECT company_id from "public"."user_table" where email = $1',
    [email], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result);
      let get_id = (result.rows[0].company_id);
      console.log(get_id);
      client.query('INSERT INTO "public"."document_table" ( "doc_type", "company_id", "doc") VALUES ($1, $2, $3)',
        [type, 1, file], function (err, result) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
          }
          console.log('in here!');
        });

    })

});

app.post('/addLLCGovernance', function (req, res) {
  console.log('went in!');
  const manager = req.body.manager
  const boolean = req.body.boolean
  const quorum = req.body.quorum
  const quorum_vote = req.body.quorum_vote
  const managers = req.body.managers
  const members = req.body.members
  const membersList = req.body.membersList
  const email = req.body.email


  const annual = boolean === 'Yes'
  client.query('SELECT company_id from "public"."user_table" where email = $1',
    [email], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      let get_id = (result.rows[0].company_id);

      var vals = []

      for (var i = 0; i < membersList.length; i++) {
        console.log(membersList[i])
        var mem = membersList[i]
        var space = mem.name.indexOf(" ")
        var first = mem.name.substring(0, space)
        var last = mem.name.substring(space + 1)
        delete mem.name;
        mem["first_name"] = first
        mem["last_name"] = last
        vals.push([mem["email"], mem['percentShares'], mem['percentProfit'], mem['percentLosses'], mem["first_name"], mem["last_name"], "LLC member", get_id])
      }
      console.log(vals)
      const query = 'INSERT INTO "public"."people_table" ("email", "share_of_ownership", "share_of_profit", "share_of_losses", "first_name", "last_name", "position", "company_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

      try {
        vals.forEach(row => {
          console.log(row.length);
          client.query(query, row, (err, res) => {
            if (err) {
              console.log('Error: ' + err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });

      } finally {
        console.log('done')
      }


      client.query('UPDATE "public"."company_table" SET annual_meetings = $1, managed_by = $2, quorum_members = $3, quorum_vote_members = $4, no_managers = $5, no_members = $6 WHERE company_id = $7',
        [annual, manager, quorum, quorum_vote, managers, members, get_id],
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
    });

});

app.post('/addPartnershipGovernance', function (req, res) {
  console.log('went in!');
  let vote = req.body.vote
  const boolean = req.body.boolean
  const partners = req.body.partners
  const membersList = req.body.membersList
  const email = req.body.email
  console.log(vote);
  console.log(boolean);
  console.log(membersList);

  console.log('email: ' + email)

  const check = boolean === 'Yes'
  if (check) {
    vote = 100
  }
  client.query('SELECT company_id from "public"."user_table" where email = $1',
    [email], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result);
      let get_id = (result.rows[0].company_id);
      console.log(get_id);

      var vals = []

      for (var i = 0; i < membersList.length; i++) {
        console.log(membersList[i])
        var mem = membersList[i]
        var space = mem.name.indexOf(" ")
        var first = mem.name.substring(0, space)
        var last = mem.name.substring(space + 1)
        delete mem.name;
        mem["first_name"] = first
        mem["last_name"] = last
        vals.push([mem["email"], mem['percentShares'], mem['percentProfit'], mem['percentLosses'], mem["first_name"], mem["last_name"], "partner", get_id])
      }
      console.log(vals)
      const query = 'INSERT INTO "public"."people_table" ("email", "share_of_ownership", "share_of_profit", "share_of_losses", "first_name", "last_name", "position", "company_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

      try {
        vals.forEach(row => {
          console.log(row.length);
          client.query(query, row, (err, res) => {
            if (err) {
              console.log('Error: ' + err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });

      } finally {
        console.log('done')
      }


      client.query('UPDATE "public"."company_table" SET partner_action_vote = $1, no_partners = $2 WHERE company_id = $3',
        [vote, partners, get_id],
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
    });

});



app.post('/addCorporationGovernance', function (req, res) {
  console.log('went in!');
  const boardDate = req.body.boardDate
  const shareholderDate = req.body.shareholderDate
  const quorum_share = req.body.quorum_share
  const vote_share = req.body.vote_share
  const quorum_board = req.body.quorum_board
  const vote_board = req.body.vote_board
  const members = req.body.members
  const shareholders = req.body.shareholders
  const authorized = req.body.authorized
  const issued = req.body.issued
  const boardMembersList = req.body.boardMembersList
  const shareholdersList = req.body.shareholdersList
  const email = req.body.email

  console.log('email: ' + email)

  client.query('SELECT company_id from "public"."user_table" where email = $1',
    [email], function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result);
      let get_id = (result.rows[0].company_id);
      console.log(get_id);

      var vals = []

      for (var i = 0; i < boardMembersList.length; i++) {
        console.log(boardMembersList[i])
        var mem = boardMembersList[i]
        var space = mem.name.indexOf(" ")
        var first = mem.name.substring(0, space)
        var last = mem.name.substring(space + 1)
        delete mem.name;
        mem["first_name"] = first
        mem["last_name"] = last
        vals.push([mem["email"], mem['sharesOwned'], mem["first_name"], mem["last_name"], "Board Member", get_id])
      }
      console.log(vals)
      const query = 'INSERT INTO "public"."people_table" ("email", "no_shares", "first_name", "last_name", "position", "company_id") VALUES ($1, $2, $3, $4, $5, $6)';

      try {
        vals.forEach(row => {
          console.log(row.length);
          client.query(query, row, (err, res) => {
            if (err) {
              console.log('Error: ' + err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });

      } finally {
        console.log('done')
      }

      var vals2 = []

      for (var i = 0; i < shareholdersList.length; i++) {
        console.log(shareholdersList[i])
        var mem = shareholdersList[i]
        var space = mem.name.indexOf(" ")
        var first = mem.name.substring(0, space)
        var last = mem.name.substring(space + 1)
        delete mem.name;
        mem["first_name"] = first
        mem["last_name"] = last
        vals2.push([mem["email"], mem['sharesOwned'], mem["first_name"], mem["last_name"], "Shareholder", get_id])
      }
      console.log(vals)

      try {
        vals2.forEach(row => {
          console.log(row.length);
          client.query(query, row, (err, res) => {
            if (err) {
              console.log('Error: ' + err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });

      } finally {
        console.log('done')
      }


      client.query('UPDATE "public"."company_table" SET board_meetings = $1, shareholder_meetings = $2, quorum_shareholders = $3, quorum_board = $4, quorum_vote_shareholders = $5, quorum_vote_board = $6, no_board_members = $7, no_shareholders = $8, no_auth_shares = $9, no_issued_shares = $10 WHERE company_id = $11',
        [boardDate, shareholderDate, quorum_share, vote_share,
          quorum_board, vote_board, members, shareholders, authorized, issued, get_id],
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
    });
});


app.get('/getPlan', function (req, res) {
  const email = req.query.email;
  console.log(email)
  client.query('SELECT plan_type FROM public.user_table where email=$1', [email],
    function (err, result) {
      if (err) {
        console.log(err);
        // res.sendStatus(500);
        // return;
      }
      console.log(result);
      console.log(result.rows);
      let rows = result.rows
      let p = ""
      for (var i = 0; i < rows.length; i++) {
        p = rows[i].plan_type;
      }
      console.log('plan:' + p);
      res.send(p);
      // let get_id = (result.rows[0].company_id);
      // console.log(get_id)
    })
});



app.get('/getCompanyInfo', function (req, res) {
  const email = req.query.email;
  console.log(email)
  client.query('SELECT company_id FROM public.user_table where email=$1', [email],
    function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result);
      let get_id = (result.rows[0].company_id);
      console.log(get_id)
      client.query('SELECT * FROM public.company_table where company_id=$1', [get_id], function (err, table) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        } else {
          console.log(table);
          res.send(table.rows);
        }
      });
    })
});

app.get('/getUserList', function (req, res) {
  const email = req.query.email;
  console.log(email)
  client.query('SELECT company_id FROM public.user_table where email=$1', [email],
    function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result);
      let get_id = (result.rows[0].company_id);
      console.log(get_id)
      client.query('SELECT first_name, last_name FROM public.user_table where company_id=$1', [get_id], function (err, table) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        } else {
          console.log(table);
          res.send(table.rows);
        }
      })
    })
})


app.get('/getMemberList', function (req, res) {
  const email = req.query.email;
  console.log(email)
  client.query('SELECT company_id FROM public.user_table where email=$1', [email],
    function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result);
      let get_id = (result.rows[0].company_id);
      console.log(get_id)
      client.query('SELECT first_name, last_name, position FROM public.people_table where company_id=$1', [get_id], function (err, table) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        } else {
          console.log(table);
          res.send(table.rows);
        }
      })
    })
})


/*
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

app.get('/getListUsers', function (req, res) {
  client.query('SELECT * FROM public.user_table where company_id=1', function (error, table) {
    if (error) {
      res.sendStatus(500);
      return;
    } else {
      console.log(results);
      res.send(table.rows);
    }
  })
})

*/




// client.end();
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })






//BELOW HERE IS PAYMENT CODE
//npm i cors express stripe uuid nodemon

//const cors = require("cors")
//const express = require("express")
//const app = express();
//app.use(cors())

const stripe = require("stripe")(process.env.REACT_APP_PRIVATE_KEY)
const uuid = require("uuid")

//middleware
app.use(express.json())


//routes
app.get("/", (req, res) => {
  res.send("IT WORKS")
})

app.post("/payment", (req, res) => {

  const { product, token } = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product.price);
  const idempontencyKey = uuid()

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: 'purchase of ${product.name}'
    }, { idempontencyKey })
  })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

})


//ABOVE HERE IS PAYMENT CODE




