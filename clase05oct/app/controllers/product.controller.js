import { Product } from "../models/product.model.js";
import logger from "../utils/logger.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    logger.error(error.message);
    res.status(400).send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//?price=500&sort=price&limit=10&page=1
const findProductsByFilters = async (req, res) => {
  try {
    let queryObject = { ...req.query };

    const withOutFields = ["page", "limit", "fields", "sort"];

    withOutFields.forEach((field) => delete queryObject[field]);

    // {
    //   price: { $gte: 70 }
    // }

    //Vamos a reemplazar los operadores por su sintaxis habitual para poder utilizarlos en la consulta
    //Vamos a transformar el objeto a un string para poder reemplazar los operadores
    let stringQuery = JSON.stringify(queryObject);
    stringQuery = stringQuery.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    queryObject = JSON.parse(stringQuery);

    //"price,title"
    let sort = "";
    if (req.query.sort) {
      sort = req.query.sort.split(",").join(" ");
    }

    //price,title,description -> "price title description"
    let selected = "";
    if (req.query.fields) {
      selected = req.query.fields.split(",").join(" ");
    }

    //paginacion
    //skip -> saltar elementos
    //limit -> es la cantidad de elementos que vamos a mostrar por pagina
    //Quiero traer informacion de la primera pagina
    //page = 1, limit = 5 -> skip(0), limit(10)
    //page = 2, limit = 5 -> skip(5), limit(10)
    //page = 3, limit = 5 -> skip(10), limit(10)

    let limit = req.query.limit || 100;
    let page = req.query.page || 1;
    let skip = (page - 1) * limit;

    // "price title"
    const products = await Product.find(queryObject)
      .select(selected)
      .sort(sort)
      .limit(limit)
      .skip(skip);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsStatistics = async (req, res) => {
  try {
    //Vamos a definir los pasos de nuestro pipeline (es la ejecucion de una secuencia de pasos u operaciones)
    //El primer paso es un match -> es el paso donde vamos a filtrar los documentos
    const statistics = await Product.aggregate([
      //Primer paso match, el resultado o la salida de este paso sirve como datos de entra del paso siguiente
      {
        $match: { price: { $gte: 5 } },
      },
      //El segundo paso es procesar los documentos para resolver un proceso complejo
      //Vamos a agrupar todos los productos y vamos a hacer lo siguiente:
      //1.- Vamos a contar cuantos productos hay en total
      //2.- Vamos a calcular el precio promedio de nuestros productos
      //3.- Vamos a obtener el precio minimo
      //4.- Vamos a obtener el precio maximo
      {
        $group: {
          //Para poder definir cual es la condicion de agrupamiento, usamos el atributo _id
          //Vamos a agrupar todos los productos
          // _id: null,
          _id: "$category",
          count: { $sum: 1 },
          avgPrice: { $avg: "$price" },
          minPrice: { $min: "$price" },
          maxPrice: { $max: "$price" },
        },
      },
      //El tercer paso es aplicar un ordenamiento
      {
        $sort: { avgPrice: -1 },
      },
    ]);
    res.json(statistics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  findProductsByFilters,
  getProductsStatistics,
};
