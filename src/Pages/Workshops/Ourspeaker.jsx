import React from "react";

const Ourspeaker = () => {
  return (
    <div>
      <div>
        {/* Heading with responsive text size and padding */}
        <div className="text-[20px] sm:text-[25px] font-bold text-center bg-[#19575B] py-5">
          Webinar Coming Soon for November
        </div>

        {/* Responsive container for images */}
        <div className="flex flex-col sm:flex-row h-auto justify-center items-center w-full gap-4 sm:gap-10 py-4 bg-[#bbd9db]">
          <div className="w-full sm:w-auto flex justify-center">
            <img
              className="h-auto lg:h-[400px] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[700px] rounded-lg"
              src="./Images/webinarpic.jpeg"
              alt="Speaker 1"
            />
          </div>
          <div className="w-full sm:w-auto flex justify-center">
            <img
              className="h-auto w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-lg"
              src="./Images/webinarpic2.png"
              alt="Speaker 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourspeaker;
