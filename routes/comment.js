import express from "express";
import { getComment,addComment,updComment,delComment } from "../controllers/Comment.js";
import { verifyTokenAdvanced,verifyTokenUser,verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/comment', getComment);
router.post('/api/comment',verifyToken, addComment);
router.put('/api/comment/:id',verifyToken, updComment);
router.delete('/api/comment/:id',verifyTokenUser, delComment);

export default router;