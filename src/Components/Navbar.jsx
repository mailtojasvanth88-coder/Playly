import React, { use } from 'react'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>

    <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2  text-3xl">
            <IoIosArrowDropleft onClick={()=>navigate(-1)} className=' cursor-pointer' />
            <IoIosArrowDropright  onClick={()=>navigate(1)}className='cursor-pointer'/>




        </div>
        <div className="flex item-center gap-4 ">
          <p className="bg-white text-black  text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hidden md:block">Install App</p>
          <p className="bg-yellow-400 text-black w-7 h-7 rounded-full flex items-center justify-center" >J</p>
        </div>
        
    </div>
    <div className="flex items-center gap-2 mt-6">
      <p className="bg-white px-3 text-black rounded-2xl h-7 flex items-center justify-center ">All</p>
      <p className="bg-black px-3 text-white rounded-2xl h-7 flex items-center justify-center ">Music</p>
      <p className="bg-black px-3 text-white rounded-2xl h-7 flex items-center justify-center ">Podcast</p>
    </div>
    
    
    </>
  )
}
