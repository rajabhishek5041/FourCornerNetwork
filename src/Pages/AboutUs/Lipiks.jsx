import React from 'react'

function Lipiks() {
  return (
    <>
        <div className='bg-[#b8eef3] w-auto h-auto  flex sm:flex-row flex-col py-16 sm:px-32 px-5 border-t-[1px] border-[#12555B] gap-10'>
        
        <div className='sm:mx-10 sm:w-1/2 flex items-center justify-center '>
               <div className='h-96 w-96 bg-[#12555B] rounded-2xl flex flex-col justify-evenly'>
                 <h1 className='text-white text-3xl text-center font-semibold  underline'>Lipika Malik</h1>
                 <p className='text-white text-lg text-center px-6'>Lipika Malik is a licensed clinical psychologist with over 6 years of experience, specializing in neurotic and stress-related cases, and holds an MPhil in Clinical Psychology, with ongoing PhD studies and CBT certification.</p>
               </div>
            </div>
            <div className='sm:h-[500px] sm:w-1/2 w-auto flex justify-center items-center '>
            <img className='sm:h-[500px] object-contain sm:mx-6 bg-[#b8eef3]' src=".\Images\Lipikaa.png" alt="" />
        </div>
        </div> 

    
    </>
  )
}

export default Lipiks