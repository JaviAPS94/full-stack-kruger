//Aca vamos a resolver la logica de leer un archivo
//Vamos a usar el modulo fs
const fs = require("fs");
const filePath = "./prueba.txt";

try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
} catch (error) {
  console.error("Error al leer el archivo", error);
}
