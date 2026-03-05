import express from "express";

import {
getContacts,
createContact,
updateContact,
deleteContact
} from "../Controllers/contact.js";

import { validateToken } from "../Middleware/validateTokenHandler.js";

const router = express.Router();

// Protect all routes
router.use(validateToken);

router.get("/", getContacts);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

export default router;