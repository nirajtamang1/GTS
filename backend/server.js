import express from "express";
import dotenv from "dotenv";
import router from "./router/placeOrderRoute.js";
import cors from "cors";

// Load environment variable from .env files
dotenv.config();
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Route to handle the order palcement
app.use("/api", router);

// Start the server and listen on the given port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
