import { useReducer } from "react";

//vamos a tener varios tipos o acciones (increment, decrement, reset)
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return { count: state.count };
  }
}

function App() {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default App;
