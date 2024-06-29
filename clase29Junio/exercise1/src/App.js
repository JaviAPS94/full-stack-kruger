import Test from "./components/Test";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //Este bloque de codigo se ejecuta solo 1 vez, la primera vez que se renderiza el componente
  // useEffect(() => {
  //   console.log("El useEffect se ejecutó");
  // }, []);

  //Este bloque de codigo se ejecuta cada vez que se renderiza el componente (siempre)
  // useEffect(() => {
  //   console.log("El useEffect se ejecutó");
  // });

  //Este bloque de codigo se ejecuta cada vez que cambie cierta condición (lo que envieemos dentro del arreglo)
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <>
      <h1>Contador: {count}</h1>
      <h1>Contador2: {count2}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount2(count2 + 1)}>Incrementar</button>
    </>
  );
}

export default App;
