import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome.jsx'
import Navbar from './Navbar'
import { useState, useEffect, useRef, useContext} from 'react'
import axios from 'axios'
import { Album } from './Album'
import HomeSongs from './HomeSongs'
import { IoMdArrowDropleftCircle } from "react-icons/io"
import { IoMdArrowDroprightCircle } from "react-icons/io"
import { Playercomponent } from './Context/Playercomponent.jsx'


export default function Display() {
   const [post, setPost] = useState([]);
   const songContainerRef = useRef(null);

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/album/list";
    axios.get(url)
      .then(res => {
        console.log(res.data);  
        setPost(res.data.albums); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

   const [Pattu, setPattu] = useState([1]);

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios.get(url)
      .then(res => {
        console.log(res.data);  
        setPattu(res.data.songs); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

 const handlePrev = () => {
    if (songContainerRef.current) {
      songContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

   const handleNext = () => {
    if (songContainerRef.current) {
      songContainerRef.current.scrollBy({ left: 370, behavior: "smooth" });
    }
  };

  const {playwithid} = useContext(Playercomponent);
  return (
    <>
    <div className='w-[100%] m-2 px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0' id='display'> 
      
     <Navbar/>
    <h1 className="m-5 text-2xl font-bold">Top Playlists</h1>
    <div className="flex items-center  mt-6 justify-between" onClick={()=>playwithid}> 
          
         {post.map((album, index) => (<Album key={album._id} image={album.image} name={album.name} desc={album.desc} id={album._id}/>
        
      ))}
      
        <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[160px] h-[160px] rounded-md' src="https://tse2.mm.bing.net/th/id/OIP.zWyPg0_OJkKOYqRtLCc1ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Paradise</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Cold and mild</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[160px] h-[160px] rounded-md' src="https://tse4.mm.bing.net/th/id/OIP.2xCbGx220AynmwWlI2eYRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Boosted</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Best bass Boosted</p>
                </div>
        
      

        </div>
        <div className='flex overflow-auto flex-col lg:flex-col'>
          <h1 className="m-5 text-2xl font-bold">Papulaor Artist</h1>
          <div className="flex mb-8 gap-4 overflow-auto justify-around">
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.vn1RnwATwfeh4EQazNt87QHaIF?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Hip Hop Tamizha</b></p>
                    <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://1.bp.blogspot.com/-qyFqMkVTrbY/XCmM1-eqiaI/AAAAAAAABf0/d1eoDmnA4QImioFLTQQMTw0HmWFI6OHGQCLcBGAs/s1600/1.jpg" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Imagine Dragons</b></p>
                    <p className='text-sm text-[#b3b3b3]'>ARTISTS</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="./src/assets/sibi.jpg" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Sibisidharth</b></p>
                    <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
                </div>
                 <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://pics.craiyon.com/2023-11-16/Zbpitr_cQq-pljdPBGPw8Q.webp" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Yo Yo Honey Singh</b></p>
                    <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
                </div>
                
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="./src/assets/jayasudha.jpeg" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Jayasudha</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Celebrity</p>
                </div>
              
                
                
                


                
                </div>
                

        </div>
         <h2 className='m-5 text-2xl font-bold'>All Timetranding Songs</h2>
         <div className=" flex mb-2 gap-4 overflow-auto text-4xl justify-between ">
           <button className='cursor-pointer'onClick={handlePrev}><IoMdArrowDropleftCircle /></button>
          <button className='cursor-pointer' onClick={handleNext}><IoMdArrowDroprightCircle /></button>
         </div>
         
        <div className="flex items-center  mt-2 mb-8 justify-between overflow-auto gap-3  position-absolute" ref={songContainerRef}> 
         
         
         {Pattu.map((album, index) => (<HomeSongs key={album._id} image={album.image} name={album.name} desc={album.desc} id={album._id}/>
        
      ))}
      
    
        
      

        </div>
    </div>
    

    </>
  )
}
