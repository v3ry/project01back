import express from "express";
import { getContact,delContact,addContact,updContact } from "../controllers/Contact.js";
import { verifyTokenAdvanced } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/api/contact',verifyTokenAdvanced, getContact);
router.post('/api/contact', addContact);
router.put('/api/contact/:id',verifyTokenAdvanced, updContact);
router.delete('/api/contact/:id',verifyTokenAdvanced, delContact);

export default router;