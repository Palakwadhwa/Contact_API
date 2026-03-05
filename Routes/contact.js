import express from "express";

import {
getContacts,
createContact,
updateContact,
deleteContact
} from "../Controllers/contact.js";

// Import authentication middleware
import {validateToken} from "../Middleware/validateTokenHandler.js";

const router = express.Router();

// Protect all contact routes
router.use(validateToken);

// Get all contacts
router.get("/", getContacts);

// Create new contact
router.post("/", createContact);

// Update contact
router.put("/:id", updateContact);

// Delete contact
router.delete("/:id", deleteContact);

export default router;