import Test from "./components/Test";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
