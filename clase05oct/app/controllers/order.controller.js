const createOrder = async (req, res) => {
  try {
    //Para crear la orden primero necesitamos calcular el total
    const { products, userId, comments } = req.body;
    //productos = [{id: 1, quantity: 2}, {id: 2, quantity: 3}]
    let totalPrice = 0;
    //Crear la orden
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createOrder };
