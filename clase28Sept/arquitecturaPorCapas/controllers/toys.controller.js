//Esta capa de controladores, es la que encargar de recibir y analizar el request de nuestro servicio y dar una respuesta al mismo

import { toySchema } from "../schemas/toys.schema.js";
import { addToy as addToyService } from "../services/toys.service.js";

const getAllToys = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addToy = async (req, res) => {
  try {
    //deberiamos hacer la validacion de los datos que nos llegan en el body
    const { error } = toySchema.validate(req.body, { convert: false });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    await addToyService(req.body);

    res.status(201).end();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { addToy, getAllToys };
