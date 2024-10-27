import React from "react";

const Whatdiffe = () => {
  return (
    <div className="py-5 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        We are making a difference
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center pt-4 justify-center">
        <div className="w-full sm:w-[300px] h-[250px] border-2 border-black rounded-md shadow-md shadow-black flex items-center justify-center">
          <div className="h-[200px] w-[90%] sm:w-[280px] flex flex-col items-center justify-center">
            <img
              className="h-[30%] mb-2"
              src="./Icons/calendar.png"
              alt="Calendar Icon"
            />
            <h1 className="font-medium text-2xl">140k+</h1>
            <h1 className="text-center pt-2 font-medium text-[16px] sm:text-[18px]">
              Sessions booked on the platform
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-[300px] h-[250px] border-2 border-black rounded-md shadow-md shadow-black flex items-center justify-center">
          <div className="h-[200px] w-[90%] sm:w-[280px] flex flex-col items-center justify-center">
            <img
              className="h-[30%] mb-2"
              src="./Icons/language.png"
              alt="Language Icon"
            />
            <h1 className="font-medium text-2xl">15+</h1>
            <h1 className="text-center pt-2 font-medium text-[16px] sm:text-[18px]">
              Languages used in our services
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-[300px] h-[250px] border-2 border-black rounded-md shadow-md shadow-black flex items-center justify-center">
          <div className="h-[200px] w-[90%] sm:w-[280px] flex flex-col items-center justify-center">
            <img
              className="h-[30%] mb-2"
              src="./Icons/review.png"
              alt="Review Icon"
            />
            <h1 className="font-medium text-2xl">4.7/5</h1>
            <h1 className="text-center pt-2 font-medium text-[16px] sm:text-[18px]">
              Average rating for our therapists
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatdiffe;
