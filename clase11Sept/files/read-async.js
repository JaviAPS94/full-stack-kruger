const fs = require("fs").promises;
const filePath = "./prueba.txt";

const readContent = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error al leer el archivo", error);
  }
};

readContent();
