import express from "express";
import { getFavorites,getFavoritesFromUser,addFavorite,delFavorite } from "../controllers/Favorites.js";
import { verifyTokenAdvanced,verifyTokenUser,verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/favorites', getFavorites);
router.get('/api/favorites/:login', getFavoritesFromUser);
router.post('/api/favorites',verifyToken, addFavorite);
router.delete('/api/favorites/:id',verifyToken, delFavorite);

export default router;