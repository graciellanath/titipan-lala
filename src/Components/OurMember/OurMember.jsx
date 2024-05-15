import React from "react";
import "./OurMember.css";
import member_1 from "../../assets/Member_1.png";
import member_2 from "../../assets/Member_2.png";
import member_3 from "../../assets/Member_3.png";
import member_4 from "../../assets/Member_4.png";

const OurMember = () => {
  return (
    <div className="members flex flex-wrap justify-center w-full px-4 max-w-[90%] md:gap-8 gap-2">
      <div className="member relative flex justify-center w-[45%] max-w-[200px] md:h-96 rounded-lg">
        <img className="w-full h-64 md:h-full rounded-lg object-cover" src={member_1} alt="" />
        <div className="caption absolute top-0 w-full h-full opacity-0 hover:opacity-75 flex justify-center align-middle items-center text-[#f9f7c9] transition ease-in-out delay-100 bg-black rounded-lg p-4 text-center font-bold">
          <p>Graciella Nathania</p>
        </div>
      </div>
      <div className="member relative flex justify-center w-[45%] max-w-[200px] md:h-96 rounded-lg">
        <img className="w-full h-64 md:h-full rounded-lg object-cover" src={member_2} alt="" />
        <div className="caption absolute top-0 w-full h-full opacity-0 hover:opacity-75 flex justify-center align-middle items-center text-[#f9f7c9] transition ease-in-out delay-100 bg-black rounded-lg p-4 text-center font-bold">
          <p>Reynard Geovanni G.</p>
        </div>
      </div>
      <div className="member relative flex justify-center w-[45%] max-w-[200px] md:h-96 rounded-lg">
        <img className="w-full h-64 md:h-full rounded-lg object-cover" src={member_3} alt="" />
        <div className="caption absolute top-0 w-full h-full opacity-0 hover:opacity-75 flex justify-center align-middle items-center text-[#f9f7c9] transition ease-in-out delay-100 bg-black rounded-lg p-4 text-center font-bold">
          <p>Winson Sovian</p>
        </div>
      </div>
      <div className="member relative flex justify-center w-[45%] max-w-[200px] md:h-96 rounded-lg">
        <img className="w-full h-64 md:h-full rounded-lg object-cover" src={member_4} alt="" />
        <div className="caption absolute top-0 w-full h-full opacity-0 hover:opacity-75 flex justify-center align-middle items-center text-[#f9f7c9] transition ease-in-out delay-100 bg-black rounded-lg p-4 text-center font-bold">
          <p>Juanto</p>
        </div>
      </div>
    </div>
  );
};

export default OurMember;
