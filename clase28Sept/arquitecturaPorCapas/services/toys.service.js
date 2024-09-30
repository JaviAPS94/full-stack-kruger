//Esta capa de servicios, es la que tiene toda la logica de negocio de nuestra aplicacion

import {
  getAllFromDB,
  writeToysToDB,
} from "../repositories/toys.repository.js";

const addToy = async (newToyData) => {
  const toys = await getAllFromDB();
  const id = toys[toys.length - 1].id + 1;
  const newToy = { id, ...newToyData };
  toys.push(newToy);
  await writeToysToDB(toys);
};

export { addToy };
