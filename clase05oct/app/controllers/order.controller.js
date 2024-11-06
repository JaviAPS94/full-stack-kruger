import { Comment } from "../models/comment.model.js";
import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

const createOrder = async (req, res) => {
  try {
    //Para crear la orden primero necesitamos calcular el total
    const { products, userId, comments } = req.body;
    //productos = [{id: 1, quantity: 2}, {id: 2, quantity: 3}]
    let totalPrice = 0;

    const productPromises = products.map(async (item) => {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      totalPrice += product.price * item.quantity;
      return product;
    });

    await Promise.all(productPromises);

    //Crear la orden
    const order = new Order({
      user: userId,
      products,
      comments,
      totalPrice,
    });

    await order.save();

    res.status(201).json({ message: "Orden creada exitosamente", order });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ user: userId })
      .populate("products.product")
      .populate("user")
      .exec();

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No se encontraron ordenes" });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const addCommentToOrder = async (req, res) => {
  try {
    //Primero vamos a obtener el id de la orden de nuestro path param
    const { orderId } = req.params;
    //Luego necesitamos saber el id del usuario que esta haciendo el comentario
    //Necesitamos el mensaje o comentario que escribio el usuario
    //Esto lo vamos obtener del cuerpo de la peticion -> req.body
    const { userId, message } = req.body;
    //Vamos a crear el comentario en nuestra BDD
    const comment = new Comment({
      user: userId,
      message,
    });

    await comment.save();

    //Vamos a relacionar el comentario con la orden
    //Primero necesito buscar la orden con el id que recibi en el path param
    const order = await Order.findById(orderId);
    //Validamos si la orden existe en la BDD
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    //comments: ["id comentario 1", "id comentario 2"]
    //Vamos a asociar el comentario que anteriormente insertamos en la BDD a la orden que acabamos
    //de encontrar
    order.comments.push(comment._id);

    //Vamos a guardar la orden con el nuevo comentario en nuestra BDD
    await order.save();

    res.status(201).json({ message: "Comentario agregado exitosamente" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createOrder, findOrdersByUserId, addCommentToOrder };
