import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <Routes>
        {/* Routes go here */}
        {/* Para definir una ruta, necesito el path y el elemento que vamos a mostrar dentro de esa ruta */}
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
