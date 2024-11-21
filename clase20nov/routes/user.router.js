import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", get);

export default router;
