import { Container, Title, Label } from "./styles";

function App() {
  return (
    <div style={Container}>
      <h3 style={Title}>Esto es un titulo con estilos usando objetos</h3>
      <p style={Label}>Estos es un texto usando objetos</p>
    </div>
  );
}

export default App;
