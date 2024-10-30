import mongoose from "mongoose";
//Objeto que representa el esquema de la orden
// {
//     user: "idDelUser",
//     products: [
//         {
//             id: "idDelProducto que estamos comprando",
//             quantity: "cantidad de productos que estamos comprando"
//         },
//         {
//             id: "idDelProducto que estamos comprando",
//             quantity: "cantidad de productos que estamos comprando"
//         }
//     ],
//     comments: [
//         "idDelComentario", "idDelComentario"
//     ],
//     totalPrice: "precioTotal",
// }
//De alguna manera yo puede traer o poblar las refencias con la informacion de los otros modelos
// {
// user: {
//     username: "alex",
//     email: "alex.om",
//     rol: "admin"
// },
//     products: [
//         {
//             product: "idDelProducto que estamos comprando",
//             quantity: "cantidad de productos que estamos comprando"
//         },
//         {
//             product: "idDelProducto que estamos comprando",
//             quantity: "cantidad de productos que estamos comprando"
//         }
//     ],
//     comments: [
//         "idDelComentario", "idDelComentario"
//     ],
//     totalPrice: "precioTotal",
// }
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "A product must have a positive quantity"],
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Order = mongoose.model("orders", orderSchema);
