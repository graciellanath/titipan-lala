// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "./Swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Culinary.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import makan1 from "../../assets/ayamgorengsulawesi.png";
import makan2 from "../../assets/bintebiluhuta.png";
import makan3 from "../../assets/dange.png";
import makan4 from "../../assets/kaledo.png";
import makan5 from "../../assets/lemang.png";
import makan6 from "../../assets/nasijaha.png";
import makan7 from "../../assets/pallubasa.png";
import makan8 from "../../assets/sopkonro.png";
import makan9 from "../../assets/tinutuan.png";

const CulinarySwiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={"auto"}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan1}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">
                Ayam Goreng Sulawesi
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan2}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Bintebiluhuta</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan3}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Dange</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan4}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Kaledo</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan5}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Lemang</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan6}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Nasi Jahe</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan7}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Pallubasa</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan8}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Sop Konro</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#12372A] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info">
              <img
                className="w-full h-[180px] object-cover"
                src={makan9}
                alt=""
              />
              <h3 className="text-center text-2xl mt-2">Tinutuan</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CulinarySwiper;
