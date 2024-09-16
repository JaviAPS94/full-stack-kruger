//En este archivo vamos a definir las funciones para poder realizar nuestro CRUD utilizando nuestro
//archivos JSON
const fs = require("fs").promises;
const filePath = "./data.json";

//Operacion de lectura -> R -> Read
const readData = async () => {
  try {
    const data = await fs.readFile(filePath);
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.error("Error al leer el archivo", error);
  }
};

//Operacion de escritura -> C -> Create
const writeData = async (data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error al escribir el archivo", error);
  }
};

module.exports = {
  readData,
  writeData,
};
