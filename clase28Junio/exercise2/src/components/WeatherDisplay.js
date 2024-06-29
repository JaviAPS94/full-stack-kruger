function WeatherDisplay({ type }) {
  const weatherMessages = {
    sunny: "It is a sunny day",
    raining: "It is raining",
    snowing: "It is snowing",
  };

  const getWeatherMessage = () => {
    return weatherMessages[type] || "No weather";
  };

  return <p>{getWeatherMessage()}</p>;
}

export default WeatherDisplay;
