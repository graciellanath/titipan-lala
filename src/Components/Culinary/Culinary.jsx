import React, { useRef } from "react";
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
import useref from "useref";

const Culinary = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) {
      tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="culinary m-auto px-[50px] w-screen relative -z-0">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider overflow-hidden w-full">
        <ul
          ref={slider}
          className="flex w-[500%] overflow-x-hidden transition ease-in-out delay-400"
        >
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img className="img" src={makan1} alt="" />
                <h3>Ayam Goreng Sulawesi</h3>
            
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan2} alt="" />
                <h3>Bintebiluhuta</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan3} alt="" />
                <h3>Dange</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan4} alt="" />
                <h3>Kaledo</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan5} alt="" />
                <h3>Lemang</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan6} alt="" />
                <h3>Nasi Jahe</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan7} alt="" />
                <h3>Pallubasa</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan8} alt="" />
                <h3>Sop Konro</h3>
              </div>
            </div>
          </li>
          <li className="w-fit list-none">
            <div className="slide h-[90%] p-4">
              <div className="user-info">
                <img src={makan9} alt="" />
                <h3>Tinutuan</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Culinary;
