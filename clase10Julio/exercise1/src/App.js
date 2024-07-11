import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return <Counter counter={counter} setCounter={setCounter} />;
}

export default App;
