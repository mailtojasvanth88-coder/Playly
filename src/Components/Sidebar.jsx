import React from 'react'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { PiStackOverflowLogo } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from 'react';

const Sidebar = () => {



  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
     <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <GoHome className=' text-2xl'/>
            <p className='font-bold '>HOME</p>

        </div>
         <div className="flex items-center gap-3 pl-8 cursor-pointer ">
            <CiSearch  className=' text-2xl'/>
            <p className='font-bold '>Search</p>

        </div>
     </div>
     <div className="bg-[#121212] h-[85%] rounded ">
        <div className="p-4 flex items-center justify-between ">
            <div className="flex items-center gp-3">

                <PiStackOverflowLogo className=' text-3xl'/>
                <p className="font-semibold pl-2 pt-1">Your Library</p>

            </div>
            <div className="flex items-center gap-3">
                <FaArrowRight />
                <FaPlus />

            </div>


        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1 className="">Create Your First Playlist</h1>
            <p className=" text-neutral-400">It's easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer hover:scale-105 '>Create Playlist</button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1 className="">Let's findsome podcasts to follow</h1>
            <p className=" text-neutral-400">we'll keep you update on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer  hover:scale-105'>Browse Podcast</button>
        </div>


     </div>
    </div>
  )
}

export default Sidebar