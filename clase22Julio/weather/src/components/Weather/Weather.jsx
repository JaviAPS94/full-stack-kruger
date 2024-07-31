import { useState } from "react";
import axios from "axios";
import {
  Button,
  Error,
  Input,
  SkeletonDetails,
  SkeletonTitle,
  Title,
  WeatherContainer,
  WeatherDetails,
  WeatherInfo,
  WeatherTitle,
} from "./styles";

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

    setError("");

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
    <WeatherContainer>
      <Title>Weather App</Title>
      <Input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Ingresa la ciudad"
      />
      <Button onClick={getWeather}>Get Weather</Button>
      {error && <Error>{error}</Error>}
      {loading ? (
        <WeatherInfo>
          <SkeletonTitle />
          <SkeletonDetails />
          <SkeletonDetails />
          <SkeletonDetails />
        </WeatherInfo>
      ) : (
        weather && (
          <WeatherInfo>
            <WeatherTitle>{weather.name}</WeatherTitle>
            <WeatherDetails>Temperature: {weather.main.temp}</WeatherDetails>
            <WeatherDetails>Humedad: {weather.main.humidity}</WeatherDetails>
            <WeatherDetails>
              Descripcion: {weather.weather[0].description}
            </WeatherDetails>
          </WeatherInfo>
        )
      )}
    </WeatherContainer>
  );
}

export default Weather;
