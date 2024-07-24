import { useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const apiKey = "6bb79a81b000e960cbe289c673e633cd";

  const getWeather = async () => {
    if (!city) {
      setError("City is required");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
      );
      setWeather(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Ingresa la ciudad"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}</p>
          <p>Humedad: {weather.main.humidity}</p>
          <p>Descripcion: {weather.weather[0].description}</p>
        </div>
      )}
    </>
  );
}

export default Weather;
