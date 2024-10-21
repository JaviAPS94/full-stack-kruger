import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/forgot-password" element={<h1>FORGOT PASSWORD</h1>} />
        <Route
          path="/reset-password/:token"
          element={<h1>RESET PASSWORD</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
