import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className="blogs bg-[#FBFAF6] pb-4  ">
            <div className="relative">
                <img src="./Images/bloggg.jpeg" alt="Image is not showing" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-white text-2xl md:text-6xl font-bold">
                        B l o g s
                    </h2>
                    <div className='text-white flex  pt-2 '>
                        <span className='text-2xl font-normal text-center '>
                            <a href="/" className="text-2xl font-normal  pr-3">Home </a>
                        </span>
                        <h2 className='text-2xl '>&gt;</h2>
                        <span className='text-2xl font-normal pl-3  '> Blogs</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-12 h-[70%]  justify-center mx-24 py-4 '>
                {
                    data.map((d, index) => (
                        <div className="blogslist flex gap-7 flex-wrap justify-center pt-4 ">
                            <div className="c1   h-64 w-80  border-solid border-1 rounded-lg justify-between shadow-[0_0.1px_13px_0.1px_#9da39e]">
                                <img className='rounded-lg h-40 w-80' src={d.image} alt="" />

                                <h2 className='font-medium  text-[20px] text-center pt-2 ' >{d.title}</h2>
                                <p className='text-xs text-center mt-2 '>{d.description}</p>

                                <div className='flex justify-evenly   mt-2 ' >

                                    <Link to={`/${d.id}`}>
                                   

                                        <button
                                            class="  font-sans font-medium text-center uppercase  text-[14px] py-1.5 ml-2 px-2   rounded-2xl hover:border-2  bg-[#19575B] border-orange text-black  flex items-center gap-2  "
                                            type="button">

                                            Read More
                                            <img className='h-4 w-4' src='./Images/right-arrow.png' alt="" />

                                        </button>
                                    </Link>
                                  
                                </div>

                               
                            </div>


                        </div>
                    ))
                }
            </div>


        </div>
    )



}
const data = [
    
    {
        id: 'mentalhealth',
        title: 'WORLD MENTAL HEALTH DAY ',
        image: './Images/mentalhealth.jpg'
    },
    {
        id: 'worldhealth',
        title: 'WORLD MENTAL HEALTH DAY ',
        image: './Images/mentalhealth.jpg'
    },
   
  
   

]


export default Blogs