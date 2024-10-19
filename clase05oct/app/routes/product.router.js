import express from "express";
import {
  getAllProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  findProductsByFilters,
  getProductsStatistics,
} from "../controllers/product.controller.js";
import authenticationMiddleware from "../middlewares/authentication.middleware.js";
import authorizationMiddleware from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.use(authenticationMiddleware);

//Vamos a definir que rol puede acceder a cada uno de los servicios
router.get("/", authorizationMiddleware(["admin", "author"]), getAllProducts); //Acceso para todos
router.post("/", saveProduct); // Acceso para admin y author
router.put("/:id", updateProduct); // Acceso para admin y author
router.delete("/:id", deleteProduct); // Acceso para admin
router.get("/by-filters", findProductsByFilters); // Acceso para todos
router.get("/statistics", getProductsStatistics); // Acceso para todos

export default router;
