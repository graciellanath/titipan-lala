import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Destination from "./Components/Destination/Destination";
import Title from "./Components/Title/Title";
import Swiper from "./Components/Destination/Swiper";
import CulinarySwiper from "./Components/Culinary/CulinarySlider";
import Destination2 from "./Components/Destination/Destination2";
import Destination3 from "./Components/Destination/Destination3";
import OurMember from "./Components/OurMember/OurMember";
import Title2 from "./Components/Title/Title2";
import Title3 from "./Components/Title/Title3";
import Weather from "./Components/Weather/Weather";
import Area from "./Components/Area/Area";
import Culinary from "./Components/Culinary/Culinary";
import Footer from "./Components/Footer/Footer";
import Map from "./Components/Map/Map";
import Lambang from "./Components/Lambang/Lambang";
import DateTime from "./Components/DateTime/DateTime";
import DateTimeWeather from "./Components/DateTimeWeather/DateTimeWeather";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-full flex justify-center flex-wrap">
        <About />
        <DateTimeWeather />
        <Title />
        <Swiper />
        <Area />
        <Title3 />
        <CulinarySwiper />
        <Map />
        <Title2 />
        <OurMember />
        <Footer />
      </div>
    </div>
  );
};

export default App;
