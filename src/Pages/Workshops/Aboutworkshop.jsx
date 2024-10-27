import React from "react";

const Aboutworkshop = () => {
  return (
    <div className="p-4 bg-gray-400">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[330px] gap-6 lg:gap-8 justify-center items-center">
        <div className="w-full lg:w-[600px] flex items-center">
          <div>
            <h1 className="text-[24px] lg:text-[30px] font-bold text-center lg:text-left">
              What is the Workshop About?
            </h1>
            <p className="text-[14px] lg:text-[16px] font-normal pt-2 text-center lg:text-left">
              This workshop is designed to empower healthcare providers,
              especially psychologists, by exploring the healing potential of
              mental health support. It focuses on providing these professionals
              with essential knowledge and practical tools to elevate their
              caregiving skills within the mental health field. Through
              examining key aspects of mental health, the workshop offers
              valuable insights and effective strategies to enhance patient care
              and overall well-being.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[450px] flex justify-center items-center">
          <img
            src="/Images/webinarabout.png"
            alt="About the Workshop"
            className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutworkshop;
