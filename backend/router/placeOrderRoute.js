import express from "express";
import { placeOrder } from "../controllers/orderController.js";

//Creating the new router
const router = express.Router();

//Define the post to handle the place order request
router.post("/placeOrder", placeOrder);

export default router;
