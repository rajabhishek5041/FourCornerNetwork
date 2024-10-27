import React from "react";

const Mentalhealth = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="./Images/bloggg.jpeg"
          alt="Image is not showing"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl md:text-6xl font-bold">
            B l o g s
          </h2>
          <div className="text-white flex pt-2">
            <span className="text-2xl font-normal text-center">
              <a href="/" className="text-2xl font-normal pr-3">
                Home{" "}
              </a>
            </span>
            <h2 className="text-2xl ">&gt;</h2>
            <a href="/Blogs" className="text-2xl font-normal pl-3">
              {" "}
              Blogs{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="justify-center flex h-[450px] bg-[#f5f8f8]">
        <div className="flex flex-col h-[400px] pt-0 md:flex-row gap-6 w-full md:w-[1200px] p-4">
          <div className="w-full flex items-center md:w-[60%]">
            <p className="pt-4 text-base md:text-xl font-normal">
              <span className="text-xl md:text-3xl font-bold">
                WORLD MENTAL HEALTH DAY <br />
              </span>
              Every year on October 10th, the world observes World Mental Health
              Day to raise awareness, reduce stigma, and promote mental
              well-being. As mental health becomes an increasing global concern,
              this day reminds us that mental health is just as important as
              physical health. While the theme may change each year, the core
              message is clear: mental health matters, and everyone deserves
              access to support and care.
            </p>
          </div>

          {/* Image container with right alignment and border for xl screens */}
          <div className="w-full md:h-[450px]  h-[300px] md:w-[40%] flex justify-center">
            <img
              className="rounded-lg md:h-[450px] w-full object-cover xl:border-2 xl:border-solid xl:border-gray-500"
              src="./Images/WorldMentalHealthDay_2022_Flowers_V2.jpg"
              alt="mental health image"
            />
          </div>
        </div>
      </div>

      <h2 className="text-center text-3xl pt-4 font-bold ">
        Why is it important?{" "}
      </h2>

      <div className="flex justify-center pt-3">
        <div className="h-auto w-[1000px]  items-center  mb-4 p-4">
          <h2 className="text-2xl font-bold pt-4">Why is it important ?</h2>
          <ul className="pt-4 list-disc pl-6 space-y-4 text-xl">
            <li>
              Raises Awareness: It helps people recognize the importance of
              mental health and its impact on everyday life.
            </li>
            <li>
              Promotes Mental Health Services: It advocates for better access to
              mental health services and resources, ensuring that everyone has
              the support they need.
            </li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">
            World Mental Health Day 2024: Prioritizing Mental Health in the
            Workplace
          </h2>
          <h2 className="pt-4 text-[17px]">
          This year’s theme highlights the need to address mental health issues in professional settings, focusing on creating supportive work environments to tackle stress and anxiety.
          </h2>


          <h2 className="pt-1 text-[17px]">
          Prioritizing mental health in the workplace enhances employee well-being, reduces stress and burnout, and boosts productivity. It creates a supportive environment that fosters engagement, morale, and retention.
          </h2>

          <h2 className="text-2xl font-bold pt-4">How you can contribute </h2>
          <ul className="pt-4 list-disc pl-6 space-y-4 text-xl">
            <li>
            Create Safe Spaces for Discussion: Create Environments, both personally and professionally, where individuals can openly talk about their mental health 
            </li>
            <li>
            Be aware: Learn about mental health issues, including the signs and symptoms of common mental health conditions. The more you know, the better equipped you'll be to support those in need.
            </li>
          </ul>
         
          <h2 className="pt-6 text-[17px]">
          By initiating open conversations and raising awareness, we can create supportive environments that help reduce stigma and promote well-being for all. Together, we can build a healthier, more inclusive world.
          </h2>


      
        </div>
      </div>
    </div>
  );
};

export default Mentalhealth;
