import React from "react";
import Aboutworkshop from "./Aboutworkshop";
import Whyattend from "./Whyattend";
import Benefits from "./Benefits";
import Ourspeaker from "./Ourspeaker";

const Workshops = () => {
  return (
    <div>
      <div className="relative">
        {/* Responsive image with full width */}
        <img src="./Images/webinar.jpg" alt="Webinar" className="w-full h-auto" />
        
        {/* Responsive header container */}
        <div className="h-auto py-4 px-2 sm:h-[70px] w-full bg-[#19575B] flex justify-center items-center text-center">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold text-white">
            Workshop on Mental Health for Healthcare Professionals
          </h1>
        </div>
      </div>

      {/* Render other sections with responsive padding */}
      <div>
        <Aboutworkshop />
        <Whyattend />
        <Benefits />
        <Ourspeaker />
      </div>
    </div>
  );
};

export default Workshops;
