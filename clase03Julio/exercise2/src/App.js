import Child from "./components/Child";
import Test from "./components/Child";
import { useCallback } from "react";

function App() {
  // const handleClick = () => {
  //   console.log("Boton presionado");
  // };

  const handleClick = useCallback(() => {
    console.log("Boton presionado");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
    </>
  );
}

export default App;
