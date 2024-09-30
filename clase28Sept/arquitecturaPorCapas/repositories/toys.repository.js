//Esta capa se encarga del acceso a los datos, es decir, consultas a nuestra BDD (en nuestro archivo json)
import fs from "fs/promises";

const TOYS_DB_PATH = "./db/toys.json";

const getAllFromDB = async () => {
  const toys = await fs.readFile(TOYS_DB_PATH, "utf-8");
  return JSON.parse(toys);
};

const writeToysToDB = async (toys) => {
  await fs.writeFile(TOYS_DB_PATH, JSON.stringify(toys, null, 2));
};

export { getAllFromDB, writeToysToDB };
