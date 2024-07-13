import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About Page</button>
    </>
  );
}

export default Home;
