import express from "express";
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);

export default router;
