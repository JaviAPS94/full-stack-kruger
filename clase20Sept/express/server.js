import express from "express";

const app = express();

//Vamos a construir un servicio de tipo get
//Dos parametros, el primero es la ruta y el segundo es un callback
app.get("/", (req, res) => {
  res.send("Hola mundo es nuestro primer endpoint usando express");
});

app.post("/", (req, res) => {
  res.send("Servicio de tipo post");
});

app.get("/json", (req, res) => {
  res.json({ message: "Esto es un mensaje en formato json" });
});

app.get("/students/:id/:page", (req, res) => {
  const { id, page } = req.params;
  res.json({ message: `Estudiante con id ${id} y page ${page}` });
});

app.get("/query-params", (req, res) => {
  const { name, age } = req.query;
  res.json({ message: `Estudiante con nombre ${name} y edad ${age}` });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
