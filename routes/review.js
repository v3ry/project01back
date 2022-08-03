import express from "express";
import { getReview,addReview,updReview } from "../controllers/Review.js";
import { verifyToken,verifyTokenAdvanced } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/review', getReview);
router.post('/api/review',verifyToken, addReview);
router.put('/api/review/:id',verifyToken, updReview);
router.delete('/api/review/:id',verifyTokenAdvanced, getReview);

export default router;