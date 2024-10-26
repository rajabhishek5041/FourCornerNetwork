import React from "react";
import Booking from "./Booking";
import Whatdiffe from "./Whatdiffe";
import Therapybooking from "./Therapybooking";

const Therapy = () => {
  return (
    <div className="">
      <div className="bg-[#17595B] flex flex-col md:flex-row justify-center gap-6 items-center md:h-[450px] w-full">
        {/* Text Section */}
        <div className=" w-full md:w-[60%] flex items-center h-auto md:h-[350px] p-6 md:p-8">
          <div className=" h-auto p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl text-orange-400 font-bold w-full md:w-[90%]">
              Experience compassionate, expert care with Four Corner Network.
            </h1>
            <p className="pt-4 md:pt-6 text-sm md:text-base">
              "Our therapists are here to guide you through each stage of your
              journey. Find support for depression, anxiety, and much more.
              Discover the Four Corner Network's dedication to delivering
              personalized, top-quality, and affordable care."
            </p>
            <div className="pt-6 md:pt-8 flex justify-center md:justify-start">
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
        </div>

        {/* Image Section */}
        <div className=" h-auto w-full md:w-[30%] flex items-center justify-center">
          <div className="overflow-hidden rounded-full h-40 w-40 md:h-[320px] md:w-[320px]">
            <img
              className="h-full w-full object-cover"
              src="./Images/therapy.jpg"
              alt="Therapy Image"
            />
          </div>
        </div>
      </div>
      {/* another section start here  */}

      <div className="overflow-hidden">
        <div className="flex bg-green-200 w-full justify-center">
          <div className="w-[90%] pt-6">
            <h1 className="text-3xl text-center font-medium">
              Four Corner Network mental health specialists focus on addressing
              a range of conditions.
            </h1>
            <div className="flex gap-3 justify-center py-10 flex-wrap">
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[230px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Depression</h1>
                  </div>
                </div>
              </div>

              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[270px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Bipolar disorder</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[210px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Anxiety</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[270px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Sleep concerns</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[200px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>OCD</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[270px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Stress concerns</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[320px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Personality disorders</h1>
                  </div>
                </div>
              </div>

              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[290px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Eating disorders</h1>
                  </div>
                </div>
              </div>

              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[330px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Adjustment disorders</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[210px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Trauma</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[200px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Grief</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[320px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>LGBTQIA+ concerns</h1>
                  </div>
                </div>
              </div>
              <div className="flex-none mb-4">
                <div className="rounded-full text-2xl shadow-md shadow-black flex items-center justify-center gap-3 font-medium w-[300px] text-center bg-red-300 h-[60px]">
                  <div>
                    <img
                      className="h-10"
                      src="./Icons/sad.png"
                      alt="Depression Icon"
                    />
                  </div>
                  <div>
                    <h1>Gender issues</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Booking />
      <Whatdiffe/>
      <Therapybooking/>
    </div>
  );
};

export default Therapy;
