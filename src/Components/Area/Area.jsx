import React, { useEffect, useState } from "react";
import axios from "axios";
import './Area.css'; 

const Area = () => {
  const [areaData, setAreaData] = useState([]);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        "https://weather-api-tau-six.vercel.app/weather/sulawesitengah",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAreaData(response.data.data.forecast.area);
    } catch (error) {
      setError(error);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#5F6F52]">Areas of Sulawesi Tengah</h1>
      {error && (
        <p className="text-red-500">
          Error fetching weather data: {error.message}
        </p>
      )}
      {areaData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areaData.map((item, index) => (
            <div key={index} className="card">
              <h2 className="text-xl text-[#FEFAE0] font-semibold mb-2">{item.name[0]}</h2>
              <h3 className="text-lg text-[#FEFAE0] font-medium mb-2">{item.name[1]}</h3>
              <p className="text-[#FEFAE0]-700 mb-1">Type: {item.type.toUpperCase()}</p>
              <p className="text-[#FEFAE0]-700 mb-1">
                Coordinates: {item.coordinate}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Area;
