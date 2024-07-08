import { useReducer } from "react";

//Action es un objeto que tiene un type y un payload
//action { type: "setPassword", payload: "1234" }
function reducer(state, action) {
  switch (action.type) {
    case "setPassword":
      return { ...state, password: action.payload };
    case "setUsername":
      // {type: "setUsername", payload: "Juan"}
      return { ...state, username: action.payload };
    case "loginSuccess":
      return { ...state, isLoggedIn: true };
    case "loginFail":
      return {
        ...state,
        isLoggedIn: false,
        error: "Invalid username or password",
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "",
      };
    default:
      throw new Error("Invalid action type");
  }
}

function App() {
  const initialState = {
    username: "",
    password: "",
    isLoggedIn: false,
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUsername = (event) => {
    //vamos a actualizar el estado username
    dispatch({ type: "setUsername", payload: event.target.value });
  };

  const handlePassword = (event) => {
    dispatch({ type: "setPassword", payload: event.target.value });
  };

  const handleSubmit = (event) => {
    //se va a encargar de validar si las creneciales son correctas
    //caso en el que las credenciales sean correctas
    //caso en el que las credenciales sean incorrectas
    event.preventDefault();
    if (state.username === "admin" && state.password === "1234") {
      dispatch({ type: "loginSuccess" });
    } else {
      dispatch({ type: "loginFail" });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <h1>Welcome, {state.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" value={state.username} onChange={handleUsername} />
          <label>Password:</label>
          <input type="text" value={state.password} onChange={handlePassword} />
          <button type="submit">Login</button>
          {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        </form>
      )}
    </>
  );
}

export default App;
