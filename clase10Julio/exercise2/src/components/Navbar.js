import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
