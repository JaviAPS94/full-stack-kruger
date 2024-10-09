//1.- Definir el schema (definciones de los atributos del documentos, los tipos de datos y validaciones) del producto
//2.- Crear el modelo (clase) del producto
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A product must have title"],
    unique: true,
  },
  description: {
    type: String,
    minlength: [5, "A product must have at least 5 characters"],
    maxlength: [100, "A product must have at most 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "A product must have price"],
    min: [0, "A product must have a positive price"],
    max: [10000, "A product must have a price less than 10000"],
  },
  category: {
    type: String,
    required: [true, "A product must have category"],
  },
});

export const Product = mongoose.model("products", productSchema);
