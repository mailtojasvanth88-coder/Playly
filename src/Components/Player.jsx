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
 

 const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios.get(url)
      .then(res => {
        console.log(res.data);
        setPost(res.data.songs); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const firstSong = post[0];

  const {seekBar,seekBg,playStatus,playAudio,pauseAudio,time}= useContext(Playercomponent);

  return (
    <div className='h-[10%] bg-black flex items-center justify-between text-white px-4'>
       {firstSong && (
        <div className="hidden lg:flex items-center ml-2 " key={firstSong._id}>
          <img src={firstSong.image} alt={firstSong.name} className="w-10 h-10 rounded" />
          <span className='ml-2'>{firstSong.name}</span>
          
        </div>
      )}
      <div className="flex flex-col items-center gap-1 m-auto ">
        <div className="flex gap-4 ">
            <IoShuffleSharp className='text-2xl cursor-pointer'/>
            <ImPrevious className='text-2xl cursor-pointer'/>
            
            {playStatus ? <FaRegCirclePause onClick={pauseAudio} className='text-2xl cursor pointer'/> : 
            <FaRegPlayCircle onClick={playAudio} className='text-2xl cursor-pointer'/> 
            }
            <ImNext className='text-2xl cursor-pointer'/>
            <RxLoop className='text-2xl cursor-pointer'/>
            
        </div>
        <div className="flex items-center gap-5">
            <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
            <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
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
