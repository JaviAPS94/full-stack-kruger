import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(5);

  const calcularFactorial = (num) => {
    const result = num <= 0 ? 1 : num * calcularFactorial(num - 1);
    return result;
  };

  const factorial = useMemo(() => calcularFactorial(number), [number]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <h1>Ejercicio usando use memo</h1>
      <input type="number" defaultValue={number} onChange={handleChange} />
      <p>El resultado del factorial es: {factorial}</p>
    </>
  );
}

export default App;
