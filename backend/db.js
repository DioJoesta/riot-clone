import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Function to initialize the database connection
async function initDb() {
    // Create a connection to the database
    const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });

    // Connect to MySQL
    try {
        await db.connect();
        console.log("Database connection successful");

        // Create users table if it doesn't exist
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE
            );
        `;
        await db.query(createTableQuery);
        console.log("Users table is ready");
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit the process if connection fails
    }

    return db; // Return the db connection for further use
}

// Call the function to initialize the connection
const db = await initDb(); // This line will work within an async function

// Function to check if a username is already taken
export const isUsernameTaken = async (username) => {
    try {
        const [rows] = await db.execute("SELECT id FROM users WHERE username = ?", [username]);
        return rows.length > 0;
    } catch (err) {
        console.error("Error checking username:", err);
        throw err;
    }
};

// Function to check if an email is already taken
export const isEmailTaken = async (email) => {
    try {
        const [rows] = await db.execute("SELECT id FROM users WHERE email = ?", [email]);
        return rows.length > 0;
    } catch (err) {
        console.error("Error checking email:", err);
        throw err;
    }
};

// Function to add a new user
export const addUser = async (username, email, hashedPassword) => {
    try {
        const [result] = await db.execute(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hashedPassword]
        );
        return result;
    } catch (err) {
        console.error("Error adding user:", err);
        throw err;
    }
};

// Function to get a user by username
export const getUserByUsername = async (username) => {
    try {
        const [rows] = await db.execute("SELECT * FROM users WHERE username = ?", [username]);
        return rows.length > 0 ? rows[0] : null; // Return the user object if found, otherwise null
    } catch (err) {
        console.error("Error retrieving user:", err);
        throw err;
    }
};


export default db;
