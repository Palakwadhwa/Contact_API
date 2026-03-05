import express from "express";
import mongoose from "mongoose";

import userRoutes from "./Routes/user.js";
import contactRoutes from "./Routes/contact.js";
import{config} from "dotenv";
const app = express();

// Middleware
app.use(express.json());

// .env setup
config({path:"./.env"});
// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Contact API 🚀");
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/contacts", contactRoutes);

// MongoDB Connection
mongoose.connect(
  process.env.MONGO_URI,)
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.log("❌ MongoDB Connection Failed:", err));

// Server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});