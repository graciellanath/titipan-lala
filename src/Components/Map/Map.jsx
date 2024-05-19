import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const [error, setError] = useState(null);
  const [zoom, setZoom] = useState(window.innerWidth < 768 ? 6 : 7);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        const response = await axios.get(
          "https://zulham.ahlitani.com/geo/v1/prov/72/map"
        );
        const data = response.data;
        if (data.provFeature && data.provFeature.type === "FeatureCollection") {
          setGeojsonData(data.provFeature);
        } else {
          throw new Error("Invalid GeoJSON format");
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeoJSON();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setZoom(window.innerWidth < 768 ? 6 : 7);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4 w-full flex justify-center flex-wrap">
      <h1 className="text-2xl text-[#5F6F52] font-bold mb-4 w-full text-center">
        Interactive Map Of Central Sulawesi
      </h1>
      {error && (
        <p className="text-red-500">
          Error fetching GeoJSON data: {error.message}
        </p>
      )}
      <MapContainer
        center={[-0.5, 121.5]}
        zoom={zoom}
        style={{ height: "70vh", width: "80%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geojsonData && <GeoJSON data={geojsonData} />}
      </MapContainer>
    </div>
  );
};

export default Map;
