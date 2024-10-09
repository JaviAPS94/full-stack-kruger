import { Product } from "../models/product.model.js";

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

export {
  getAllProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  findProductsByFilters,
};
