import React from "react";

const Whyattend = () => {
  return (
    <div className="w-full h-auto pt-4 bg-[#19575B] p-4">
      <div>
        <h1 className="text-[24px] sm:text-[30px] font-medium text-center text-white">
          Why you should attend this webinar:
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly py-5 items-center gap-6">
        {/* First Box */}
        <div className="group relative shadow-md border-2 w-full sm:w-[350px] lg:w-[400px] flex justify-center cursor-pointer rounded-lg h-[250px] border-black overflow-hidden transition-transform duration-500 hover:translate-x-2">
          <div className="absolute inset-0 bg-gradient-to-r group-hover:animate-pulse opacity-0 group-hover:opacity-100"></div>
          <div className="relative z-10  px-4">
            <h1 className="text-[20px] sm:text-[22px] underline py-6 font-medium text-white">
              If you're someone who…
            </h1>
            <div className="">
              <div className=" text-orange-300">
                <h1>1. Struggles with adapting to change</h1>
                <h1>2. Wants to develop a positive mindset</h1>
                <h1>3. Wants to enhance your mental well-being</h1>
                <h1>4. Feels overwhelmed with life changes</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div className="group relative border-2 shadow-md w-full sm:w-[350px] lg:w-[400px] flex justify-center cursor-pointer rounded-lg h-[250px] border-black overflow-hidden transition-transform duration-500 hover:translate-x-2">
          <div className="absolute inset-0 bg-gradient-to-r group-hover:animate-pulse opacity-0 group-hover:opacity-100"></div>
          <div className="relative z-10  px-4">
            <h1 className="text-[20px] sm:text-[22px] underline py-6 font-medium text-white">
              Then this webinar will help you in
            </h1>
            <div className="text-orange-300">
              <h1>1. Adapting to Change with Confidence</h1>
              <h1>2. Fostering a Positive Outlook</h1>
              <h1>3. Boosting Emotional Wellness</h1>
              <h1>4. Managing Overwhelming Emotions</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyattend;
