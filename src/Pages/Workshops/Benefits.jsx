import React from 'react';
import { Link } from 'react-router-dom'
function Benefits() {
  return (
    <>
      {/* Header Section */}
      <div className="w-full pt-6">
        <h1 className="bg-[#19575B] p-4 w-full text-center text-white text-xl sm:text-2xl shadow-2xl shadow-[#bbf5f9]">
          Webinar Benefits
        </h1>
      </div>

      {/* Title Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl my-8 sm:my-12 font-bold text-center font-sans text-[#19575B]">
        Benefits of Joining Session
        </h1>
      </div>

      {/* Benefit Boxes Section */}
      <div className="w-full h-auto flex flex-col sm:flex-row flex-wrap text-white justify-around gap-6 px-4 sm:px-10">

        {/* Benefit 1 */}
        <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-12 sm:h-20" src="./Images/confidence.png" alt="Knowledge" />
          </div>
          <div className="items-center flex justify-center text-center">
            <div>
              <h1 className="text-lg sm:text-lg font-medium">Gain insight into the ground reality of how HR supports employee mental health </h1>
              {/* <p className="text-sm sm:text-base">Explore the relationship between suicide and social media.</p> */}
            </div>
          </div>
        </div>

      {/* Benefit 2 */}
         <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="items-center flex justify-center pl-6 text-center">
            <div>
              <h1 className="text-lg sm:text-lg font-medium">Get knowledge about various organization policies regarding employee mental health</h1>
              
            </div>
          </div>
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-12 sm:h-20" src="./Images/optimism.png" alt="Resources" />
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="rounded-xl bg-[#19575B] flex shadow-2xl shadow-[#bbf5f9] w-full sm:w-[42%] h-auto p-4">
          <div className="w-[100px] sm:w-[150px] items-center justify-center flex">
            <img className="h-12 sm:h-16" src="./Images/rocket.png" alt="Community Engagement" />
          </div>
          <div className="items-center flex justify-center text-center">
            <div>
              <h1 className="text-lg sm:text-lg font-medium">Clear the air regarding what to do if you are dealing with mental health difficulties in the organisation</h1>
              
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center my-9 sm:my-10 px-4">
       <Link to = '/'>
       <button className="bg-[#19575B] rounded-full h-10 sm:h-12 text-base sm:text-lg font-medium w-48 sm:w-64 shadow-2xl shadow-[#19575B] text-white text-center">
          Join  Now
        </button>
       </Link>
      </div>
    </>
  );
}

export default Benefits;
