const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // write nos permite agregar una o mas cosas a la respuesta que le vamos a dar al cliente
    res.write("El cliente solicito la pagina principal");
  } else if (req.url === "/products") {
    res.write("El cliente esta solicitando productos");
  } else if (req.url === "/users") {
    res.write("El cliente esta solicitando usuarios");
  } else {
    res.statusCode = 404;
    res.write("Ruta no encontrada");
  }

  res.end();
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
