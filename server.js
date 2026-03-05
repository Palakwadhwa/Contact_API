import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./Routes/user.js";
import contactRoutes from "./Routes/contact.js";

dotenv.config();

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Contact API Running");
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/contacts", contactRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log("Database connection error:", err);
});

// Server start
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});