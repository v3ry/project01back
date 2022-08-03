import express from "express";
import { getItems,addItems,delItems,getOneItems,updItems } from "../controllers/Items.js";
import { verifyToken,verifyTokenAdvanced,verifyTokenUser } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/items', getItems);
router.get('/api/items/:id', getOneItems);
router.put('/api/items/:id',verifyTokenUser, updItems);
router.post('/api/items',verifyToken, addItems);
router.delete('/api/items/:id',verifyTokenAdvanced, delItems);

export default router;