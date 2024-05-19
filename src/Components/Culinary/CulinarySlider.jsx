import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "./Swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Culinary.css";
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
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan1}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A specialty dish consisting of chicken cooked with signature
                  spices, then fried until crispy, producing a delicious and
                  savory aroma
                </p>
              </div>

              <h3 className="text-center text-2xl mt-2">
                Ayam Goreng Sulalala
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan2}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  Means "Corn drizzled with sauce". A traditional soup from
                  Central Sulawesi made from young corn, grated coconut, shrimp,
                  fish, and spices, creating a savory, sweet, spicy, and
                  refreshing flavor
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Bintebiluhuta</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan3}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A traditional snack from Central Sulawesi made from roasted
                  sago mixed with grated coconut and brown sugar, often served
                  as a sweet snack
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Dange</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan4}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A traditional dish from Central Sulawesi consisting of beef
                  bone soup with signature spices, served with fresh sour broth
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Kaledo</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan5}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A traditional dish made from glutinous rice and coconut milk,
                  cooked in bamboo lined with banana leaves, resulting in a
                  savory and aromatic flavor
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Lemang</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan6}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A dish made from rice cooked with ginger and other spices,
                  producing a warm and distinctive aroma
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Nasi Jahe</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan7}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A dish from Makassar, South Sulawesi, consisting of beef or
                  buffalo meat soup cooked with roasted grated coconut and
                  spices, providing a rich and flavorful taste
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Pallubasa</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan8}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  A dish from Makassar consisting of beef rib soup cooked with
                  signature spices, resulting in a rich and strongly aromatic
                  broth
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Sop Konro</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex justify-center hover:cursor-pointer">
          <div className="slide h-[90%] p-4 bg-[#B99470] text-[#FBFADA] md:w-[95%] w-[80%] mb-8">
            <div className="user-info relative">
              <img
                className="w-full h-[180px] object-cover"
                src={makan9}
                alt=""
              />
              <div className="w-full h-[180px] text-center absolute top-0 bg-black bg-opacity-70 flex justify-center items-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                <p class="md:text-md text-sm text-white">
                  Also known as Manado porridge, is a typical porridge from
                  North Sulawesi made from a mixture of rice, pumpkin, corn,
                  sweet potatoes, vegetables, and spices, creating a flavorful
                  and nutritious dish
                </p>
              </div>
              <h3 className="text-center text-2xl mt-2">Tinutuan</h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CulinarySwiper;
