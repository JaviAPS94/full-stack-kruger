import express from "express";
import {
  getAllProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  findProductsByFilters,
  getProductsStatistics,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", saveProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/by-filters", findProductsByFilters);
router.get("/statistics", getProductsStatistics);

export default router;
