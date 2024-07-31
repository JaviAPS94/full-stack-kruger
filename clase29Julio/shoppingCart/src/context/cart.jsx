import { createContext, useState } from "react";

//Crear el contexto
const CartContext = createContext();

function CartProvider({ children }) {
  //Vamos a manejar los productos
  const [products] = useState([
    { id: 1, name: "Play Station 5", price: 100, image: "" },
    { id: 2, name: "Portatil", price: 200, image: "" },
    { id: 3, name: "Pantalla", price: 300, image: "" },
  ]);

  //Vamos a definir los valores que vamos a compartir
  const valuesToShare = {
    products,
  };

  return (
    <CartContext.Provider value={valuesToShare}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
