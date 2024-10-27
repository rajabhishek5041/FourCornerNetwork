import React from "react";

const Booking = () => {
  return (
    <div className="w-full flex justify-center h-[300px] items-center bg-gray-200 py-8 md:py-12">
      <div className="flex flex-col md:flex-row w-[90%] max-w-5xl">
        <div className="w-full md:w-1/2 px-4 h-auto flex flex-col items-center md:items-start justify-center font-bold text-center md:text-left">
          <h1 className="text-2xl md:text-4xl">Book a session now</h1>
          <p className="w-[90%] md:w-[85%] pt-3 text-sm md:text-base">
            Find your match from a diverse network of 110+ mental health
            experts, proficient in 15+ languages.
          </p>
          <div className="pt-6 md:pt-8 flex justify-center md:justify-start w-full">
            <button className="relative overflow-hidden bg-[#268FBC] text-sm font-medium h-12 w-full md:w-52 py-2 md:py-3 shadow-2xl shadow-slate-600 text-white rounded-full group flex items-center justify-center gap-2">
              <span className="relative z-10 flex gap-2 items-center">
                <span>Make An Appointment</span>
                <img
                  src="./Images/next.png"
                  alt="Next Icon"
                  className="h-5 w-5 md:h-7 md:w-7 relative z-10"
                />
              </span>
              <div className="absolute inset-0 bg-[#989DA0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <img
            className="h-[200px] sm:h-[240px] md:h-[300px] w-full max-w-xs md:max-w-none rounded-2xl object-cover"
            src="./Images/team (2).png"
            alt="Booking"
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
