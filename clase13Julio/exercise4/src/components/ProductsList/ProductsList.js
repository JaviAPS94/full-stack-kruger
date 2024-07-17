import { ProductContainer, ProductPrice, ProductName } from "./styles";

function ProductsList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductContainer key={index}>
          <ProductName>{product.name}</ProductName>
          <div>{product.description}</div>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductContainer>
      ))}
    </div>
  );
}

export default ProductsList;
