// ================= IMPORTS =================
import express from "express";
import { registerUser, login } from "../Controllers/user.js"; 
// IMPORTANT: .js extension required in ES Modules


// ================= ROUTER INITIALIZATION =================
const router = express.Router();


// ================= USER REGISTRATION =================
// @desc    Register a new user
// @method  POST
// @route   /api/user/register
router.post("/register", registerUser);


// ================= USER LOGIN =================
// @desc    Login existing user
// @method  POST
// @route   /api/user/login
router.post("/login", login);


// ================= EXPORT ROUTER =================
export default router;