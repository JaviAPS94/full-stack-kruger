import express from "express";

const app = express();

//Middleware que se aplica a nivel de toda la aplicacion, (middleware global)
app.use((req, res, next) => {
  console.log("middleware global ejecutado");
  next(); // Pasa la ejecucion al siguiente middleware o la ejecucion del servicio llamado
});

//Middleware que se aplica a una ruta o servicio en especifico
const middlewareEspecifico = (req, res, next) => {
  console.log("Middleware especifico ejecutado");
  next();
};

const logOriginalUrl = (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
};

const logMethod = (req, res, next) => {
  console.log("Request type:", req.method);
  next();
};

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.post("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/ruta-especifica", middlewareEspecifico, (req, res) => {
  res.send("Ruta especifica");
});

app.get("/user/:id", logOriginalUrl, logMethod, (req, res) => {
  res.send("Usuario " + req.params.id);
});

app.listen(8080, () => {
  console.log("Servidor iniciado");
});
