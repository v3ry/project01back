import express from "express";
import { getComment,addComment,updComment,delComment } from "../controllers/Comment.js";
import { verifyTokenAdvanced,verifyTokenUser,verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/favorites', getComment);
router.post('/api/favorites',verifyToken, addComment);
router.put('/api/favorites/:id',verifyToken, updComment);
router.delete('/api/favorites/:id',verifyToken, delComment);

export default router;