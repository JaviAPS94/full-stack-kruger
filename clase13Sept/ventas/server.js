//vamos un servidor http, que va a tener los endpoint o servicios para proveer todo lo referente a ventas
const http = require("http");
const { readSales, createSale, updateSale } = require("./index");

const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
};

//creamos el servidor http
const server = http.createServer(async (req, res) => {
  try {
    //Vamos a construir nuestro primer servicio o endpoint
    //Vamos obtener todas las ventas
    if (req.method === "GET" && req.url === "/sales") {
      const sales = await readSales();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(sales));
    } else if (req.method === "POST" && req.url === "/sales") {
      //Vamos a crear una venta
      const newSale = await parseBody(req);
      await createSale(newSale);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Venta creada exitosamente" }));
      //localhost:8080/sales/3
    } else if (req.method === "PUT" && req.url.startsWith("/sales/")) {
      const urlSplit = req.url.split("/");
      const id = Number(urlSplit[2]);
      const updatedSale = await parseBody(req);
      await updateSale(id, updatedSale);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Venta actualizada exitosamente" }));
    }
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Error en la petición", error: error.message })
    );
  }
});

//Vamos a levantar el servidor en un puerto en especifico
server.listen(8080, () => {
  console.log("Servidor levantado en el puerto 8080");
});
