import React from 'react'

function Why() {
  return (
    <>
        <div className='p-20 bg-[#12555B] w-full h-auto '>
            <div className='text-[#A2E2E8] flex flex-col text-center'>
                <h1 className='sm:text-4xl text-2xl font-bold text-[#FFA75C] '>Why Four Corner Network?</h1>
                <h2 className='text-lg py-10'>Our platform is built by psychiatrists, therapists and mental health experts with immense global experience.</h2>
            </div>
            <div className='flex gap-4 sm:flex-row flex-col w-full'>
                <div className='flex flex-col'>
                    <img className='sm:h-36 h-20 object-contain' src=".\Images\services.png" alt="" />
                    <h1 className='text-[#FFA75C] text-center text-xl font-semibold py-3'>Integrated mental healthcare</h1>
                    <p className='text-[#A2E2E8] text-center'>Access self-care tools, community support, and in-person or online therapy and psychiatry services.</p>
                </div>
                <div className='flex flex-col'>
                    <img className='sm:h-36 h-20 object-contain' src=".\Images\atom.png" alt="" />
                    <h1 className='text-[#FFA75C] text-center text-xl font-semibold py-3'>Grounded in science</h1>
                    <p className='text-[#A2E2E8] text-center'>Our mental health care options are based on scientifically proven treatments & clinically validated approaches.</p>
                </div>
                <div className='flex flex-col'>
                    <img className='sm:h-36 h-20 object-contain' src=".\Images\public-service.png" alt="" />
                    <h1 className='text-[#FFA75C] text-center text-xl font-semibold py-3'>Personalised support</h1>
                    <p className='text-[#A2E2E8] text-center'>Our treatment plans are tailored to your unique needs, so you can get the right care at the right time.</p>
                </div>
                <div className='flex flex-col'>
                    <img className='sm:h-36 h-20 object-contain' src=".\Images\schedule.png" alt="" />
                    <h1 className='text-[#FFA75C] text-center text-xl font-semibold py-3'>Round the clock support</h1>
                    <p className='text-[#A2E2E8] text-center'>Our mental healthcare offerings and services can be accessed from wherever you might be, all 7 days a week.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Why