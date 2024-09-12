const fs = require("fs").promises;
const filePath = "./prueba-escritura.txt";

const appendContent = async (newContent) => {
  try {
    await fs.appendFile(filePath, newContent + "\n", "utf-8");
  } catch (error) {
    console.error("Error: ", error);
  }
};

appendContent("Hola, soy un nuevo contenido");
