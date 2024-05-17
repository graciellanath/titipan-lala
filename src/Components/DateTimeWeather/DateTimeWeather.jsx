import React, { useEffect, useState } from "react";
import axios from "axios";

const DateTimeWeather = () => {
  const [dateTime, setDateTime] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

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
    <div className="w-full flex justify-center mb-8">
      <div className="bg-white drop-shadow-lg w-[90%] md:w-[75%] flex justify-center p-4 relative flex-wrap gap-8">
        {error && (
          <p className="text-red-500">
            Error fetching weather data: {error.message}
          </p>
        )}
        {weatherData && (
          <img
            className="absolute top-0 left-0 opacity-50 md:w-1/2 h-full blur-md object-cover brightness-90 -z-10"
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
        )}
        <div className="w-full flex justify-center flex-col">
          <h1 className="text-4xl text-black font-bold w-full text-center">
            Sulawesi Tengah
          </h1>
          {error && (
            <p className="text-red-500">
              Error fetching date and time: {error.message}
            </p>
          )}
          {!error && dateTime && (
            <p className="text-2xl text-center">
              {new Date(dateTime).toLocaleString()}
            </p>
          )}
        </div>
        <div className="w-full flex justify-center flex-col">
          <h1 className="text-xl text-black w-full text-center">
            It Is Currently
          </h1>
          {error && (
            <p className="text-red-500">
              Error fetching weather data: {error.message}
            </p>
          )}
          {weatherData && (
            <div className="">
              <h1 className="text-5xl font-bold text-black text-center">
                {weatherData.current.temp_c}°C
              </h1>
              <div className="text-3xl flex flex-wrap justify-center items-center align-middle gap-4">
                <p>{weatherData.current.condition.text}</p>

                <img
                  src={weatherData.current.condition.icon}
                  alt={weatherData.current.condition.text}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimeWeather;
