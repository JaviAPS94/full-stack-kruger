//Express tiene algo que se llama Router
//Router es un objeto que nos permite definir rutas de manera modular
//Vamos a dividir o segmentar nuestro recursos por un grupo de rutas

//En la capa de ruteo, unicamente deberiamos tener la definicion de las rutas
// ruta -> /api/v1/toys, /api/v1/toys/:id
import express from "express";
import { addToy } from "../controllers/toys.controller.js";

//Todas las funciones que acabamos de llamar en la capa de ruteo, deberian estas definidas en la capa de controladores

const router = express.Router();

// router.get("/", getAllToys);
router.post("/", addToy);
// router.get("/:id", getToyById);
// router.patch("/:id", updateToy);
// router.delete("/:id", deleteToy);

export default router;
