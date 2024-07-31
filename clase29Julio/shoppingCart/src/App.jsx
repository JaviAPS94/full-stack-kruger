import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  );
}

export default App;
