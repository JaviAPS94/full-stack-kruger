//Vamos a crear nuestro primer servidor http
//1.- Vamos a usar un modulo que forma parte de node.js (http) -> esto lo vamos a reemplazar por express
const http = require("http");

//2.- Crear un servidor, que va a encargarse de recibir las peticiones y enviar las respuestas
//Las peticiones las va a recibir del frontend
const server = http.createServer((req, res) => {
  //   res.end("Hola mundo, soy un servidor construido con node.js");
  //Setear el tipo de response que vamos a darle al cliente
  //El response es un objeto, que tiene diferentes propiedas
  //Header: es un objeto que tiene diferentes propiedades, que nos permiten configurar el response
  res
    .setHeader("Content-Type", "text/html")
    .end(
      "El cliente hizo una peticion a esta ruta: " +
        req.url +
        "<h1>Codigo html</h1>"
    );
});

//3.- Levantar el servidor
server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
