const fs = require("fs").promises;
const filePath = "./prueba-escritura.txt";

const writeContent = async () => {
  try {
    await fs.writeFile(
      filePath,
      "Esto es una prueba escribiendo en un archivo de manera async"
    );
  } catch (error) {
    console.error("Error: ", error);
  }
};

writeContent();
