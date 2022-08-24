import express from "express";
import { getComment,addComment,updComment,delComment } from "../controllers/Comment.js";
import { verifyTokenAdvanced,verifyTokenUser } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/comment', getComment);
router.post('/api/comment',verifyTokenUser, addComment);
router.put('/api/comment/:id',verifyTokenUser, updComment);
router.delete('/api/comment/:id',verifyTokenUser, delComment);

export default router;