import React from "react";

const Therapybooking = () => {
  return (
    <div>
      <div className="bg-[#19575B] w-full flex py-8 justify-center px-4">
        <div className="w-full max-w-[550px]">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            "Therapists help you build a healthier relationship with yourself
            and others."
          </h1>
        </div>
      </div>

      <div className="flex  gap-3 py-4 justify-center md:justify-start  items-center px-4">
        <h1 className="bg-green-200 h-[50px] w-[130px] text-[16px] md:text-[20px] font-medium rounded-lg flex justify-center items-center">
          Low Mood
        </h1>
        <h1 className="bg-green-200 h-[50px] w-[160px] text-[16px] md:text-[20px] font-medium rounded-lg flex justify-center items-center">
          Overthinking
        </h1>
        <h1 className="bg-green-200 h-[50px] w-[100px] text-[16px] md:text-[20px] font-medium rounded-lg flex justify-center items-center">
          Stress
        </h1>
      </div>

      {/* Thereapist section start here  */}

      <div  className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 pb-8 " >
        <div className="flex justify-center  px-4 pb-8">
          <div className="w-full max-w-md hover:bg-[#f1efe7]  cursor-pointer bg-[#FAF3E0]  rounded-2xl border-2 border-gray-300">
            <div className="bg-[#f1efef] rounded-2xl flex gap-4 pt-6 px-3 flex-row md:flex-row items-center">
              <img
                className="w-[90px] h-[110px] md:w-[130px] md:h-[140px] rounded-lg"
                src="./Images/Debolina.jpeg"
                alt=""   
              />
              <div className="text-center md:t ext-left md:pl-2">
                <h1 className="font-bold text-[18px] md:text-[24px]">
                  Debolina Roy
                </h1>
                <h1 className="text-[11px] md:text-[13px]">
                  (RCI Clinical Psychologist)
                </h1>
                <h1 className="font-medium pt-1 md:pt-2 text-[14px] md:text-[16px]">
                  Over 9 years of experience
                </h1>
                <h1 className="font-medium text-[14px] md:text-[16px]">
                  English, Hindi
                </h1>
              </div>
            </div>

            <div className="flex flex-row md:flex-row items-center justify-center gap-2 md:gap-4 py-4">
              <div className="w-full md:w-auto pt-4 flex justify-center">
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Online
                </h1>
              </div>
              <div className="w-full md:w-auto flex flex-col items-center">
                <h1 className="text-[9px] md:text-[10px]">Available via:</h1>
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Video, Voice
                </h1>
              </div>
            </div>

            <div className="flex justify-center pb-4">
              <h1 className="h-[40px] w-[170px] md:h-[45px] md:w-[180px] rounded-lg text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center bg-orange-400">
                Book a Session
              </h1>
            </div>
          </div>
        </div>

        {/* Second therapist */}
        <div className="flex justify-center px-4 pb-8">
          <div className="w-full max-w-md bg-[#FAF3E0] hover:bg-[#f1efe7]  cursor-pointer rounded-2xl border-2 border-gray-300">
            <div className="bg-[#f1efef] rounded-2xl flex gap-4 pt-6 px-3 flex-row md:flex-row items-center">
              <img
                className="w-[90px] h-[110px] md:w-[130px] md:h-[140px] rounded-lg"
                src="./Images/Lipika.jpeg"
                alt=""
              />
              <div className="text-center md:text-left md:pl-2">
                <h1 className="font-bold text-[18px] md:text-[24px]">
                  Lipika Malik
                </h1>
                <h1 className="text-[11px] md:text-[13px]">
                  (RCI Clinical Psychologist)
                </h1>
                <h1 className="font-medium pt-1 md:pt-2 text-[14px] md:text-[16px]">
                  Over 6 years of experience
                </h1>
                <h1 className="font-medium text-[14px] md:text-[16px]">
                  English, Hindi
                </h1>
              </div>
            </div>

            <div className="flex flex-row md:flex-row items-center justify-center gap-2 md:gap-4 py-4">
              <div className="w-full md:w-auto pt-4 flex justify-center">
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Online
                </h1>
              </div>
              <div className="w-full md:w-auto flex flex-col items-center">
                <h1 className="text-[9px] md:text-[10px]">Available via:</h1>
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Video, Voice
                </h1>
              </div>
            </div>

            <div className="flex justify-center pb-4">
              <h1 className="h-[40px] w-[170px] md:h-[45px] md:w-[180px] rounded-lg text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center bg-orange-400">
                Book a Session
              </h1>
            </div>
          </div>
        </div>

        {/* 3rd therapist */}
        <div className="flex justify-center px-4 pb-8">
          <div className="w-full max-w-md bg-[#FAF3E0] hover:bg-[#f1efe7]  cursor-pointer rounded-2xl border-2 border-gray-300">
            <div className="bg-[#f1efef] rounded-2xl flex gap-4 pt-6 px-3 flex-row md:flex-row items-center">
              <img
                className="w-[90px] h-[110px] md:w-[140px] md:h-[140px] rounded-lg"
                src="./Images/dimple.png"
                alt=""
              />
              <div className="text-center md:text-left md:pl-2">
                <h1 className="font-bold text-[18px] md:text-[24px]">
                  Dimple Panchal
                </h1>
                <h1 className="text-[11px] md:text-[13px]">
                  (RCI Clinical Psychologist)
                </h1>
                <h1 className="font-medium pt-1 md:pt-2 text-[14px] md:text-[16px]">
                  Over 3 years of experience
                </h1>
                <h1 className="font-medium text-[14px] md:text-[16px]">
                  English, Hindi
                </h1>
              </div>
            </div>

            <div className="flex flex-row md:flex-row items-center justify-center gap-2 md:gap-4 py-4">
              <div className="w-full md:w-auto pt-4 flex justify-center">
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Online
                </h1>
              </div>
              <div className="w-full md:w-auto flex flex-col items-center">
                <h1 className="text-[9px] md:text-[10px]">Available via:</h1>
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Video, Voice
                </h1>
              </div>
            </div>

            <div className="flex justify-center pb-4">
              <h1 className="h-[40px] w-[170px] md:h-[45px] md:w-[180px] rounded-lg text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center bg-orange-400">
                Book a Session
              </h1>
            </div>
          </div>
        </div>

        {/* 4rd therapist */}
        <div className="flex justify-center px-4 pb-8">
          <div className="w-full max-w-md bg-[#FAF3E0] hover:bg-[#f1efe7]  cursor-pointer rounded-2xl border-2 border-gray-300">
            <div className="bg-[#f1efef] rounded-2xl flex gap-4 pt-6 px-3 flex-row md:flex-row items-center">
              <img
                className="w-[90px] h-[110px] md:w-[140px] md:h-[140px] rounded-lg"
                src="./Images/sarita.png"
                alt=""
              />
              <div className="text-center md:text-left md:pl-2">
                <h1 className="font-bold text-[18px] md:text-[24px]">
                  Sreeta Nair
                </h1>
                <h1 className="text-[11px] md:text-[13px]">
                  (RCI Clinical Psychologist)
                </h1>
                <h1 className="font-medium pt-1 md:pt-2 text-[14px] md:text-[16px]">
                  Over 6 years of experience
                </h1>
                <h1 className="font-medium text-[14px] md:text-[16px]">
                  English, Hindi
                </h1>
              </div>
            </div>

            <div className="flex flex-row md:flex-row items-center justify-center gap-2 md:gap-4 py-4">
              <div className="w-full md:w-auto pt-4 flex justify-center">
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Online
                </h1>
              </div>
              <div className="w-full md:w-auto flex flex-col items-center">
                <h1 className="text-[9px] md:text-[10px]">Available via:</h1>
                <h1 className="h-[40px] w-[130px] md:h-[45px] md:w-[140px] rounded-md text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center border-orange-500">
                  Video, Voice
                </h1>
              </div>
            </div>

            <div className="flex justify-center pb-4">
              <h1 className="h-[40px] w-[170px] md:h-[45px] md:w-[180px] rounded-lg text-[14px] md:text-[18px] font-medium border-2 flex justify-center items-center bg-orange-400">
                Book a Session
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapybooking;
