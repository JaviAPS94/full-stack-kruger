import { useContext } from "react";
import CartContext from "../context/cart";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products } = useContext(CartContext);

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
