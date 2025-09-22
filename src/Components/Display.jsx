import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome.jsx'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Album } from './Album'
import HomeSongs from './HomeSongs'


export default function Display() {
   const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/album/list";
    axios.get(url)
      .then(res => {
        console.log(res.data);  
        setPost(res.data.albums); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

   const [Pattu, setPattu] = useState([]);

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios.get(url)
      .then(res => {
        console.log(res.data);  
        setPattu(res.data.songs); 
      })
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <>
    <div className='w-[100%] m-2 px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0' id='display'> 
    
    <h1 className="m-5 text-2xl font-bold">Top Playlists</h1>
    <div className="flex items-center  mt-6 justify-between"> 
          
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
        <div className='flex overflow-auto flex-col'>
          <h1 className="m-5 text-2xl font-bold">Papulaor Artist</h1>
          <div className="flex mb-8 gap-4 overflow-auto justify-around">
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://tse2.mm.bing.net/th/id/OIP.zWyPg0_OJkKOYqRtLCc1ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Paradise</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Cold and mild</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://tse4.mm.bing.net/th/id/OIP.2xCbGx220AynmwWlI2eYRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Boosted</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Best bass Boosted</p>
                </div>
                 <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://tse4.mm.bing.net/th/id/OIP.2xCbGx220AynmwWlI2eYRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Boosted</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Best bass Boosted</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://tse2.mm.bing.net/th/id/OIP.zWyPg0_OJkKOYqRtLCc1ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Paradise</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Cold and mild</p>
                </div>
                <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
                    <img className='w-[180px] h-[180px] rounded-full' src="https://tse4.mm.bing.net/th/id/OIP.2xCbGx220AynmwWlI2eYRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="playlist cover" />
                    <p className='mt-2 text-m'><b>Boosted</b></p>
                    <p className='text-sm text-[#b3b3b3]'>Best bass Boosted</p>
                </div>
              
                
                
                


                
                </div>
                

        </div>
        
        <div className="flex items-center  mt-6 justify-between overflow-auto gap-1"> 
          
         {Pattu.map((album, index) => (<HomeSongs key={album._id} image={album.image} name={album.name} desc={album.desc} id={album._id}/>
        
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
    </div>
    

    </>
  )
}
