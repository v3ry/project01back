import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import routerUser from "./routes/index.js";
import routerItems from "./routes/items.js";
import routerContact from "./routes/contact.js";
import routerReview from "./routes/review.js";
import routerNews from "./routes/news.js"
import routerComment from "./routes/comment.js"

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:['http://localhost:3001','http://localhost:3000','http://82.65.82.1:3000','https://62e81be826faad0ce81352d6--glowing-pastelito-80c05e.netlify.app']}));

app.use(cookieParser());
app.use(express.json());
app.use(routerUser);
app.use(routerItems);
app.use(routerContact);
app.use(routerReview);
app.use(routerNews);
app.use(routerComment);
console.log(0.1+0.2);
let port = 4002
app.listen(port, ()=> console.log('Server running at port '+port));