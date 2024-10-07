import express from "express";
import {
  getAllProducts,
  saveProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", saveProduct);
router.put("/:id", updateProduct);

export default router;
