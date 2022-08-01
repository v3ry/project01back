import express from "express";
import { getContact,delContact,addContact,updContact } from "../controllers/Contact.js";
import { verifyToken } from "../middleware/VerifyToken2.js";

const router = express.Router();

router.get('/api/contact',verifyToken, getContact);
router.post('/api/contact', addContact);
router.put('/api/contact/:id',verifyToken, updContact);
router.delete('/api/contact/:id',verifyToken, delContact);

export default router;