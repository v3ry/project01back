import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import router2 from "./routes/items.js";
import router3 from "./routes/contact.js";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:['http://localhost:3001','http://localhost:3000','http://82.65.82.1:3000']}));
// app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(router2);
app.use(router3);
// app.get('/api/items',(req, res) => {
//     let sqlQuery = "SELECT * FROM recipes";
    
//     let query = db.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//       res.status(200).json(results)
//       // res.send(apiResponse(results));
//     });
//   });
  
  
//   app.get('/api/sucre',(req, res) => {
//     let sqlQuery = "SELECT * FROM sucre";
    
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//       res.status(200).json(results)
//     });
//   });
  
//   app.get('/api/contact',(req, res) => {
//     let sqlQuery = "SELECT * FROM contact";
    
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//       res.status(200).json(results)
//     });
//   });
     
//   /**
//    * Get Single Item
//    *
//    * @return response()
//    */
//   app.get('/api/items/:id',(req, res) => {
//     let sqlQuery = "SELECT * FROM recipes WHERE id=" + req.params.id;
      
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//       res.status(200).json(results)
//     });
//   });
  
//   app.get('/api/sucre/:id',(req, res) => {
//       let sqlQuery = "SELECT * FROM sucre WHERE id=" + req.params.id;
        
//       let query = conn.query(sqlQuery, (err, results) => {
//         if(err) throw err;
//         res.status(200).json(results)
//       });
//     });
     
//   /**
//    * Create New Item
//    *
//    * @return response()
//    */
//   app.post('/api/items',(req, res) => {
//     let data = {cat: req.body.cat, title: req.body.title, img: req.body.img, txtPreview: req.body.txtPreview, txtIngr: req.body.txtIngr, txtRec: req.body.txtRec,publication_date: req.body.publication_date};
    
//     let sqlQuery = "INSERT INTO recipes SET ?";
    
//     let query = conn.query(sqlQuery, data,(err, results) => {
//       if(err) throw err;
//       res.status(200).json(results)
//     });
//   });
  
//   app.post('/api/contact',(req, res) => {
//       let data = {name: req.body.name, mail: req.body.mail,Subject: req.body.Subject,Message: req.body.Message};
      
//       let sqlQuery = "INSERT INTO contact SET ?";
      
//       let query = conn.query(sqlQuery, data,(err, results) => {
//         if(err) throw err;
//         res.send(apiResponse(results));
//         console.log(results.insertId)
//       });
//     });
     
//   /**
//    * Update Item
//    *
//    * @return response()
//    */
//   app.put('/api/items/:id',(req, res) => {
//     let sqlQuery = "UPDATE recipes SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;
    
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//       res.send(apiResponse(results));
//     });
//   });
     
//   /**
//    * Delete Item
//    *
//    * @return response()
//    */
//   app.delete('/api/contact/:id',(req, res) => {
//     let sqlQuery = "DELETE FROM contact WHERE id="+req.params.id+"";
      
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//         res.send(apiResponse(results));
//     });
//   });
  
  
//   app.delete('/api/items/:id',(req, res) => {
//     let sqlQuery = "DELETE FROM recipes WHERE id="+req.params.id+"";
      
//     let query = conn.query(sqlQuery, (err, results) => {
//       if(err) throw err;
//         res.send(apiResponse(results));
//     });
//   });
    
//   /**
//    * API Response
//    *
//    * @return response()
//    */
//   function apiResponse(results){
//       return JSON.stringify({"status": 200, "error": null, "response": results});
//   }
let port = 4002
app.listen(port, ()=> console.log('Server running at port '+port));