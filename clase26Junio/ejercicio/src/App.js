import ProductShow from "./components/ProductShow";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getRandomProduct = () => {
    const productsBase = ["cellphone", "printer", "computer", "screen"];
    return productsBase[Math.floor(Math.random() * productsBase.length)];
  };

  return (
    <div>
      <ProductShow type="cellphone" />
      <ProductShow type="printer" />
      {getRandomProduct()}
    </div>
  );
}

export default App;
