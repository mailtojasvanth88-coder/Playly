import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoShuffleSharp } from "react-icons/io5";
import { ImPrevious } from "react-icons/im";
import { FaRegPlayCircle } from "react-icons/fa";
import { ImNext } from "react-icons/im";
import { RxLoop } from "react-icons/rx";
import { IoPlaySharp } from "react-icons/io5";
import { GiOldMicrophone } from "react-icons/gi";
import { PiQueueLight } from "react-icons/pi";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import { RiPlayMiniLine } from "react-icons/ri";           
import { SiZoom } from "react-icons/si";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6"
import { useContext } from 'react';
import { Playercomponent } from './Context/Playercomponent.jsx';

export const Player = () => {
 

  const handleseek = (e) => {
    if (audioRef.current && seekBg.current) {
      const rect = seekBg.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };


 
  

  const {seekBar,seekBg,playStatus,playAudio,pauseAudio,time,track,nextTrack,prevTrack,loop,suffle}= useContext(Playercomponent);



  const progressPercentage = time.totalTime.minutes > 0
    ? ((time.currentTime.minutes * 60 + time.currentTime.seconds) / (time.totalTime.minutes * 60 + time.totalTime.seconds)) * 100 
    : 0;


  return (
    <div className='h-[10%] bg-black flex items-center justify-between text-white px-4'>
      <div className="lg:flex items-center gap-4 lg:w-[200px]">
        <img className="w-11 h-11 object-cover rounded" src={track?.image} alt="" />
        <div className="hidden lg:block">
          <p>{track?.name}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto ">
        <div className="flex gap-4 ">
            <IoShuffleSharp onClick={suffle} className='text-2xl cursor-pointer'/>
            <ImPrevious onClick={prevTrack} className='text-2xl cursor-pointer'/>
            
            {playStatus ? <FaRegCirclePause onClick={pauseAudio} className='text-2xl cursor pointer'/> : 
            <FaRegPlayCircle onClick={playAudio} className='text-2xl cursor-pointer '/> 
            }
            <ImNext onClick={nextTrack} className='text-2xl cursor-pointer'/>
            
            <RxLoop onclick={loop} className='text-2xl cursor-pointer'/>
            
            
        </div>
        <div className="flex items-center gap-5">
            <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
            <div ref={seekBg} onClick={handleseek} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" style={{width: `${progressPercentage}`}} />
            </div>
            <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <IoPlaySharp className='text-1xl cursor-pointer'/>
        <GiOldMicrophone className='text-1xl cursor-pointer'/>
        <PiQueueLight className='text-1xl cursor-pointer'/>
        <MdOutlineSpeaker className='text-1xl cursor-pointer'/>
        <FaVolumeHigh  className='text-1xl cursor-pointer'/>
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <RiPlayMiniLine  className='text-1xl cursor-pointer'/>
        <SiZoom className='text-2xl cursor-pointer'/>
        



        

      </div>
    </div>
  );
};
