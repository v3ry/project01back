import express from "express";
import { getNews,addNews,updNews,delNews } from "../controllers/News.js";
import { verifyToken,verifyTokenAdvanced } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/news', getNews);
router.post('/api/news',verifyTokenAdvanced, addNews);
router.put('/api/news/:id',verifyTokenAdvanced, updNews);
router.delete('/api/news/:id',verifyTokenAdvanced, delNews);

export default router;