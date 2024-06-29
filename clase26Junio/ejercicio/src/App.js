import ProductShow from "./components/ProductShow";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getRandomProduct = () => {
    const productsBase = ["cellphone", "printer", "computer", "screen"];
    return productsBase[Math.floor(Math.random() * productsBase.length)];
  };

  const handleAddProduct = () => {
    setProducts([...products, getRandomProduct()]);
  };

  const renderedProducts = products.map((product, index) => {
    return <ProductShow type={product} key={index} />;
  });

  return (
    <div>
      <button onClick={handleAddProduct}>Add product</button>
      {renderedProducts}
    </div>
  );
}

export default App;
