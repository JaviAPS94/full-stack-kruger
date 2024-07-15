import styled from "styled-components";

function App() {
  //Quiero definir una h3 con estilos, usando styled components
  const Title = styled.h3`
    color: red;
    font-size: 40px;
    border: 5px solid ${(props) => props.borderColor};
  `;

  const Text = styled.p((props) => ({
    color: "blue",
    background: "yellow",
    fontWeight: "bold",
    fontSize: props.size,
  }));

  return (
    <>
      <Title borderColor="green">
        Esto es un title usando styled components
      </Title>
      <Title borderColor="blue">
        Esto es un title usando styled components
      </Title>
      <Text size="40px">Esto es un texto usando styled components</Text>
      <Text size="20px">Esto es un texto usando styled components</Text>
    </>
  );
}

export default App;
