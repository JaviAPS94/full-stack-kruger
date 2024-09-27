//el server js unicamente deberia tener configuraciones de arranque del servidor, no deberia tener logica de negocio
import express from "express";
import fs from "fs/promises";
//Joi se encarga de definir schemas de validacion, vamos a definir de que tipo deben ser los campos que vamos a recibir en el request
import Joi from "joi";

const app = express();
app.use(express.json());

const toySchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  picture: Joi.string().required(),
});

const getToys = async () => {
  //vamos a leer los juguetes del archivo json
  const toys = await fs.readFile("./db/toys.json", "utf-8");
  return JSON.parse(toys);
};

const getAllToys = async (req, res) => {
  const toys = await getToys();
  res.json(toys);
};

const createToy = async (req, res) => {
  //Antes de ejecutar toda la logica del backend vamos a validar, si los datos que recibimos son correctos
  const { error } = toySchema.validate(req.body, { convert: false });

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const toys = await getToys();
  const id = toys[toys.length - 1].id + 1;
  const newToy = { id, ...req.body };
  toys.push(newToy);
  await fs.writeFile("./db/toys.json", JSON.stringify(toys, null, 2));
  res.status(201).end();
};

//los datos del juguete llegan como datos a nuestro request, req.body
//creando un nuevo recurso, el codigo de respuesta es 201
//app.post("/api/v1/toys");

//Vamos a crear un servicio para obtener el toy por id
// /api/v1/toys/:id

// Vamos a crear un servicio para eliminar un toy
// /api/v1/toys/:id

// Vamos a crear un servicio para modificar un tay de manera parcial
// /api/v1/toys/:id

app.patch("/api/v1/toys/:id", async (req, res) => {
  const id = Number(req.params.id);
  const toys = await getToys();
  const toysIndex = toys.findIndex((toy) => toy.id === id);

  if (toysIndex === -1) {
    res.status(404).end();
  }

  //Actualizacion parcial
  const toy = toys[toysIndex];

  Object.assign(toy, req.body);

  toys[toysIndex] = toy;

  await fs.writeFile("./db/toys.json", JSON.stringify(toys, null, 2));
  res.end();
});

app.get("/api/v1/toys", getAllToys); //solo vamos a tener la definicion de nuestro servicio, es decir solo tenemos la ruta
app.post("/api/v1/toys", createToy);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
