import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const products = [
    {
      name: "Product 1",
      description: "Description of product 1",
      price: "$10.99",
    },
    {
      name: "Product 2",
      description: "Description of product 2",
      price: "$24.99",
    },
    {
      name: "Product 3",
      description: "Description of product 3",
      price: "$15.49",
    },
  ];

  return <ProductsList products={products} />;
}

export default App;
