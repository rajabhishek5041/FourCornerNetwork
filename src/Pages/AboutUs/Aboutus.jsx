import React from 'react'
import Debolina from './Debolina'
import Lipiks from './Lipiks'
import Dimple from './Dimple'
import Sreeta from './Sreeta'

const Aboutus = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row bg-[#FBFAF6]'>
        <div className='p-6 sm:p-10 md:p-16 lg:p-20 w-full sm:w-1/2'>
          <div className='text-xs sm:text-sm md:text-base lg:text-lg'>
            A b o u t &nbsp; U s
          </div>
          <div className='text-3xl sm:text-4xl  font-semibold'>
            <h1>
            From Every Corner, for{' '}
              <span className='bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent'>
              Every Mind:
              </span>{' '}
              <hr className='border-none' />
              Inclusive Mental Health Education
            </h1>
          </div>
          <div className='text-wrap py-6 sm:py-10 md:py-12 lg:py-16 text-sm sm:text-base md:text-lg'>
            <p>
            Four Corner Network was founded by four clinical psychologists—Lipika Malik, Debolina Roy, Dimple Panchal, and Sreeta Nair—who came together to bridge the gap in reachable, trustworthy mental health education. Inspired by our diverse backgrounds from different corners of India, we’re committed to offering inclusive, reliable learning that goes beyond traditional education.            </p>
          </div>
          <button className='bg-[#12555B] shadow-2xl shadow-[#12555B] text-white h-10 w-60 rounded-xl  text-sm sm:text-base md:text-lg font-normal font-sans'>
        Scroll Down To Know More
      </button>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px]'>
        <img className='h-[280px] sm:h-[660px]  object-contain' src='.\Images\Logo.png' alt='Service'/>

        </div>
      </div>
    <Debolina/>
    <Lipiks/>
    <Dimple/>
    <Sreeta/>
</>
  )
}

export default Aboutus