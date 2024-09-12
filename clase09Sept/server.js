const http = require("http");

const server = http.createServer((req, res) => {
  //Vamos a obtener la ruta base
  //http://localhost:3000
  const baseURL = `${req.protocol}://${req.headers.host}`;
  const reqURL = new URL(req.url, baseURL);
  const searchParams = new URLSearchParams(reqURL.searchParams);

  //Vamos a obtener el query param "name"
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
  console.log(searchParams.has("lastname"));
  console.log(searchParams.getAll("name"));
  searchParams.set("prueba", "soy un valor agregado de prueba");
  console.log(searchParams.get("prueba"));
});

server.listen(8080, () => console.log("Server is running..."));
