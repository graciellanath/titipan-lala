// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "./Swiper.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import pantai from "../../assets/pantai.png";
import danau from "../../assets/danau.png";
import banggai from "../../assets/banggai.png";
import lorelindu from "../../assets/lorelindu.png";
import saluopa from "../../assets/saluopa.png";
import tomini from "../../assets/tomini.png";
import kalamata from "../../assets/kalamata.png";
import nomoni from "../../assets/nomoni.png";
import malenge from "../../assets/malenge.png";

export default () => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      slidesPerView={"auto"}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        {/* Card 1 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img
            src={banggai}
            alt="Destination 1"
            className="destination-image"
          />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">Lake Paisu Pok Luk Panenteng</h2>
            <p className="md:text-md text-sm">
              Sparkling amidst the Banggai Islands of Central Sulawesi, it
              offers a captivating natural charm with calm waters and enticing
              mysteries
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Card 2 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img src={pantai} alt="Destination 2" className="destination-image" />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">Tanjung Karang Beach</h2>
            <p className="md:text-md text-sm">
              A tropical paradise in Central Sulawesi that offers pristine white
              sands, crystal blue sea waters, and stunning natural landscapes
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Card 3 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img src={danau} alt="Destination 3" className="destination-image" />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">Lake Poso</h2>
            <p className="md:text-md text-sm">
              A blue gem in the heart of Central Sulawesi, captivating with its
              enchanting natural beauty and profound cultural richness
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img
            src={lorelindu}
            alt="Destination 1"
            className="destination-image"
          />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">The Lore Lindu National Park</h2>
            <p className="md:text-md text-sm">
              Extraordinary biodiversity, presenting the majestic blend of
              tropical rainforest, rare primate habitats, and breathtaking
              natural panoramas
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Card 2 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img
            src={saluopa}
            alt="Destination 2"
            className="destination-image"
          />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">The Saluopa Waterfall </h2>
            <p className="md:text-md text-sm">
              Captivates with its stunning natural charm, as its water cascades
              down steep cliffs, creating an enchanting and refreshing
              atmosphere
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Card 3 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img src={tomini} alt="Destination 3" className="destination-image" />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">The Tomini Bay</h2>
            <p className="md:text-md text-sm">
              The endless beauty of its sea and its enchanting beaches make for
              the perfect blend of adventure and tranquility in Central Sulawesi
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img
            src={kalamata}
            alt="Destination 1"
            className="destination-image"
          />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">Kalamata Fort</h2>
            <p className="md:text-md text-sm">
              A silent witness to past struggles, captivating with its
              magnificent classical architecture and spectacular views from the
              towering hilltops
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Card 2 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img src={nomoni} alt="Destination 2" className="destination-image" />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">Nomoni Waterfall </h2>
            <p className="md:text-md text-sm">
              The stunning natural beauty, with its cascading waters from a
              height, flowing through lush green forests, creates an enchanting
              atmosphere for adventure-seeking visitors
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Card 3 */}
        <div className="destination-card hover:cursor-pointer md:w-[400px] w-full mb-8">
          <img
            src={malenge}
            alt="Destination 3"
            className="destination-image"
          />
          <div className="destination-info px-[80px] md:px-[40px]">
            <h2 className="md:text-xl text-md px-4 font-bold">Malenge Island</h2>
            <p className="md:text-md text-sm">
              Explore the hidden wonders beneath its waters and relax on the
              captivating shores of its white sandy beaches
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
