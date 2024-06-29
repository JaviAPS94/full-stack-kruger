import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={handleShow}>Toogle</button>
      {show && <Counter />}
    </>
  );
}

export default App;
