import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import bcrypt from "bcryptjs";
import { isUsernameTaken, isEmailTaken, addUser } from "./db.js";
import jwt from "jsonwebtoken";
import { getUserByUsername } from "./db.js";

dotenv.config(); // Loads environment variables

const app = express();

// Middleware
app.use(cors()); // Enables CORS so the frontend can speak to the backend
app.use(express.json()); // Allows the server to accept JSON data

// Sign-Up Route
app.post("/signup", async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log("Received data:", { username, email, password, confirmPassword });

    try {
        // Step 1: Check if the username is already taken
        const isUsernameAlreadyTaken = await isUsernameTaken(username);
        if (isUsernameAlreadyTaken) {
            return res.status(400).json({ error: "Username is already taken" });
        }

        // Step 2: Check if the email is already taken
        const isEmailAlreadyTaken = await isEmailTaken(email);
        if (isEmailAlreadyTaken) {
            return res.status(400).json({ error: "Email is already taken" });
        }

        // Step 3: Ensure password and confirm password match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Step 4: Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Step 5: Add the new user to the database
        await addUser(username, email, hashedPassword);

        console.log("User created successfully");
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error("Error in signup:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

//sign-in route
app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    console.log("Received data:", { username, password });

    try {
        // Step 1: Check if the username exists
        const user = await getUserByUsername(username); // Modify to query based on username

        if (!user) {
            return res.status(400).json({ error: "Username not found" });
        }

        // Step 2: Compare the password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        // Step 3: Generate JWT Token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: "Sign-in successful", token });

    } catch (error) {
        console.error("Error during sign-in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Test DB Connection Route
app.get("/test-db", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.json({ message: "Database connected successfully" });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Database error", err: err });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
