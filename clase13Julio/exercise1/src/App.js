import Test from "./components/Test";

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

  //Vamos a crear un estilo para un label (objeto de js)
  const Container = {
    background: "yellow",
    padding: "20px",
    width: "300px",
  };

  const Title = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  const Label = {
    color: "purple",
    textAlign: "center",
    fontSize: "20px",
  };

  // Estilos usando objetos en una sola variable

  const styles = {
    Container: {
      background: "yellow",
      padding: "20px",
      width: "300px",
    },
    Title: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    Label: {
      color: "purple",
      textAlign: "center",
      fontSize: "20px",
    },
  };

  return (
    <>
      <h3 style={{ color: "blue", background: "yellow" }}>
        Esto es un texto con estilos
      </h3>
      {/* Etiqueta h3 usando estilos como objeto separado */}
      <h3 style={Label}>Esto es un texto con estilos separados en un objeto</h3>

      <div style={Container}>
        <h3 style={Title}>Esto es un titulo con estilos usando objetos</h3>
        <p style={Label}>Estos es un texto usando objetos</p>
      </div>

      <div style={styles.Container}>
        <h3 style={styles.Title}>
          Esto es un titulo con estilos usando objetos
        </h3>
        <p style={styles.Label}>Estos es un texto usando objetos</p>
      </div>

      <div>
        {products.map((product, index) => (
          <div key={index}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {product.name}
            </div>
            <div>{product.description}</div>
            <div style={{ color: "red" }}>{product.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
