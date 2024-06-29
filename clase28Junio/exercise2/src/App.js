import WeatherDisplay from "./components/WeatherDisplay";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState("sunny");

  const handleSelectChange = (event) => {
    setWeather(event.target.value);
  };

  return (
    <>
      <label>Choose the weather:</label>
      <select onChange={handleSelectChange}>
        <option value="sunny">Sunny</option>
        <option value="raining">Raining</option>
        <option value="snowing">Snowing</option>
      </select>
      <WeatherDisplay type={weather} />
    </>
  );
}

export default App;
