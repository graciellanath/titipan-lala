import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?q=1.4300,121.4456&key=40057c89e30d440485125925241705"
        );
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4 w-full flex justify-center flex-wrap">
      <h1 className="text-2xl font-bold mb-4 w-full text-center">
        Current Weather
      </h1>
      {error && (
        <p className="text-red-500">
          Error fetching weather data: {error.message}
        </p>
      )}
      {weatherData && (
        <div className="card">
          <h2>{weatherData.location.region}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
