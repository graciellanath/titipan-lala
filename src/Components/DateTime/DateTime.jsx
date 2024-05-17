import React, { useEffect, useState } from "react";
import axios from "axios";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchDateTime = async () => {
      try {
        const response = await axios.get(
          "http://worldtimeapi.org/api/timezone/Asia/Makassar"
        );
        setDateTime(response.data.datetime);
      } catch (error) {
        setError(error);
        console.error("Error fetching date and time:", error);
      }
    };

    fetchDateTime();
  }, []);

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
        Current Date and Time in Sulawesi Tengah
      </h1>
      {error && (
        <p className="text-red-500">
          Error fetching date and time: {error.message}
        </p>
      )}
      {!error && dateTime && (
        <p className="text-xl">{new Date(dateTime).toLocaleString()}</p>
      )}
    </div>
  );
};

export default DateTime;
