//Vamos a crear una aplicacion para poder administrar usuarios
//CRUD de usuarios
//C -> Crear nuevos usuarios (Vamos a tener un servicio o endpoint que nos permita crear un nuevo usuario)
//R -> Leer todos los usuarios (Vamos a tener un servicio o endpoint que nos permita leer todos los usuarios)
//U -> Actualizar un usuario (Vamos a tener un servicio o endpoint que nos permita actualizar un usuario)
//D -> Borrar un usuario (Vamos a tener un servicio o endpoint que nos permita borrar un usuario)

//Opcional: Construir un servicio que permita traer el informacion del usuario por su id
import express from "express";
import userRoutes from "./routes/user.router.js";
import cors from "cors";

const app = express();

//middleware para poder recibir informacion en nuestros servicios en formato json
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
