import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
