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

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(router2);
app.use(router3);

let port = 4002
app.listen(port, ()=> console.log('Server running at port '+port));