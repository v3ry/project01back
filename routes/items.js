import express from "express";
import { getItems,addItems,delItems } from "../controllers/Items.js";
import { verifyToken } from "../middleware/VerifyToken2.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/api/items', getItems);
router.post('/api/items', addItems);
// router.post('/login', Login);
// router.get('/token', refreshToken);
router.delete('/api/items/:id',verifyToken, delItems);

export default router;