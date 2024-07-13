import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>About Page</h1>
      <button onClick={goToHome}>Go to Home Page</button>
    </>
  );
}

export default About;
