const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')
const config = require('./config');
const dotenv = require('dotenv')

dotenv.config();


/*------------------------------------------
--------------------------------------------
parse application/json
--------------------------------------------
--------------------------------------------*/
app.use(bodyParser.json());
   
/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection(config.db);
   
/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});
   
/**
 * Get All Items
 *
 * @return response()
 */
app.use(cors())

app.use(express.json());

app.get('/api/items',(req, res) => {
  let sqlQuery = "SELECT * FROM recipes";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.status(200).json(results)
    // res.send(apiResponse(results));
  });
});


app.get('/api/sucre',(req, res) => {
  let sqlQuery = "SELECT * FROM sucre";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.status(200).json(results)
  });
});

app.get('/api/contact',(req, res) => {
  let sqlQuery = "SELECT * FROM contact";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.status(200).json(results)
  });
});
   
/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/api/items/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM recipes WHERE id=" + req.params.id;
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.status(200).json(results)
  });
});

app.get('/api/sucre/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM sucre WHERE id=" + req.params.id;
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.status(200).json(results)
    });
  });
   
/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/items',(req, res) => {
  let data = {cat: req.body.cat, title: req.body.title, img: req.body.img, txtPreview: req.body.txtPreview, txtIngr: req.body.txtIngr, txtRec: req.body.txtRec,publication_date: req.body.publication_date};
  
  let sqlQuery = "INSERT INTO recipes SET ?";
  
  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.status(200).json(results)
  });
});

app.post('/api/contact',(req, res) => {
    let data = {name: req.body.name, mail: req.body.mail,Subject: req.body.Subject,Message: req.body.Message};
    
    let sqlQuery = "INSERT INTO contact SET ?";
    
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
      console.log(results.insertId)
    });
  });
   
/**
 * Update Item
 *
 * @return response()
 */
app.put('/api/items/:id',(req, res) => {
  let sqlQuery = "UPDATE recipes SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/contact/:id',(req, res) => {
  let sqlQuery = "DELETE FROM contact WHERE id="+req.params.id+"";
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});


app.delete('/api/items/:id',(req, res) => {
  let sqlQuery = "DELETE FROM recipes WHERE id="+req.params.id+"";
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});
  
/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
   



// //Route login:

// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get('/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/login'
// }));

// //Define the Login Route
// app.get("/login", (req, res) => {
//     res.render("login.ejs")
// })


// //Use the req.isAuthenticated() function to check if user is Authenticated
// checkAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) { return next() }
//   res.redirect("/login")
// }

// //Define the Protected Route, by using the "checkAuthenticated" function defined above as middleware
// app.get("/dashboard", checkAuthenticated, (req, res) => {
//   res.render("dashboard.ejs", {name: req.user.displayName})
// })

// //Define the Logout
// app.post("/logout", (req,res) => {
//     req.logOut()
//     res.redirect("/login")
//     console.log(`-------> User Logged out`)
// })


/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(4002,() =>{
  console.log('Server started on port 4002...');
});