const fs = require("fs");
const filePath = "./prueba-escritura.txt";

const content = "Esto es una prueba escribiendo en un archivo";

try {
  fs.writeFileSync(filePath, content);
} catch (error) {
  console.error("Error: ", error);
}
