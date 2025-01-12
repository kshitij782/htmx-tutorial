import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const { MONGO_URL } = process.env;

// Connected to db
export const connect = () => {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database connected successfully"))
        .catch((err) => {
            console.error("Connection failed:", err.message);
            process.exit(1); // Exit the process if the connection fails
        });
};