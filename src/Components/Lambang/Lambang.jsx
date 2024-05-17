import React, { useEffect, useState } from "react";
import axios from "axios";

const Lambang = () => {
  const [regenciesData, setRegenciesData] = useState([]);
  const [provinceData, setProvinceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegenciesData = async () => {
      try {
        const regencyRequests = Array.from(
          { length: 13 },
          (_, i) => 418 + i
        ).map(
          (id) => axios.get(`/api/regencies/${id}/200`) 
        );
        const regencyResults = await Promise.all(regencyRequests);
        console.log(regencyResults);
        setRegenciesData(regencyResults.map((result) => result.data));
      } catch (error) {
        setError(error);
        console.error("Error fetching regencies data:", error);
      }
    };

    const fetchProvinceData = async () => {
      try {
        const response = await axios.get(`/api/provinces/27/200`); 
        setProvinceData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching province data:", error);
      }
    };

    fetchRegenciesData();
    fetchProvinceData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Regencies and Province Data</h1>
      {error && (
        <p className="text-red-500">Error fetching data: {error.message}</p>
      )}
      <div>
        <h2 className="text-xl font-bold">Province Data</h2>
        {provinceData && (
          <div className="card">
            <h3>{provinceData.name}</h3>
            {}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">Regencies Data</h2>
        {regenciesData.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.name}</h3>
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lambang;
