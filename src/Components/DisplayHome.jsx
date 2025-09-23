import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { Album } from './Album';
import HomeSongs from './HomeSongs';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { Playercomponent } from './Context/Playercomponent.jsx';
import Navbar from './Navbar.jsx';

export default function DisplayHome() {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const songContainerRef = useRef(null);

  // fetch albums
  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/album/list";
    axios.get(url)
      .then(res => {
        console.log("Albums:", res.data);
        setAlbums(res.data.albums);
      })
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  // fetch songs
  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios.get(url)
      .then(res => {
        console.log("Songs:", res.data);
        setSongs(res.data.songs);
      })
      .catch(error => console.error('Error fetching songs:', error));
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

  const { playwithid } = useContext(Playercomponent);

  return (
    <div> 
      <Navbar/>
      <h1 className="m-5 text-2xl font-bold">Top Playlists</h1>
      <div className="flex items-center mt-6 justify-between overflow-auto" ref={songContainerRef}>
        {albums.map((album, index) => (
          <Album 
            key={album._id} 
            image={album.image} 
            name={album.name} 
            desc={album.desc} 
            id={album._id}
          />
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

      <div className='flex  flex-col overflow-auto '>
        <h1 className="m-5 text-2xl font-bold">Popular Artists</h1>
        <div className="flex mb-8  gap-4 overflow-auto">
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
            <img className=' rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.vn1RnwATwfeh4EQazNt87QHaIF?rs=1&pid=ImgDetMain&o=7&rm=3" alt="artist" />
            <p className='mt-2 text-m'><b>Hip Hop Tamizha</b></p>
            <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
          </div>
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
            <img className=' rounded-full' src="https://1.bp.blogspot.com/-qyFqMkVTrbY/XCmM1-eqiaI/AAAAAAAABf0/d1eoDmnA4QImioFLTQQMTw0HmWFI6OHGQCLcBGAs/s1600/1.jpg" alt="artist" />
            <p className='mt-2 text-m'><b>Imagine Dragons</b></p>
            <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
          </div>
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
            <img className='rounded-full' src="./src/assets/sibi.jpg" alt="artist" />
            <p className='mt-2 text-m'><b>Sibisidharth</b></p>
            <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
          </div>
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
            <img className=' rounded-full' src="https://pics.craiyon.com/2023-11-16/Zbpitr_cQq-pljdPBGPw8Q.webp" alt="artist" />
            <p className='mt-2 text-m'><b>Yo Yo Honey Singh</b></p>
            <p className='text-sm text-[#b3b3b3]'>ARTIST</p>
          </div>
          <div className='hover:bg-[#1f1f1f] p-2 rounded-md cursor-pointer'>
            <img className='rounded-full' src="./src/assets/jayasudha.jpeg" alt="artist" />
            <p className='mt-2 text-m'><b>Jayasudha</b></p>
            <p className='text-sm text-[#b3b3b3]'>Celebrity</p>
          </div>
        </div>
      </div>

      <h2 className='m-5 text-2xl font-bold'>All Time Trending Songs</h2>
      <div className="flex mb-2 gap-4 overflow-auto text-4xl justify-between">
        <button className='cursor-pointer hidden md:block' onClick={handlePrev}><IoMdArrowDropleftCircle /></button>
        <button className='cursor-pointer hidden md:block' onClick={handleNext}><IoMdArrowDroprightCircle /></button>
      </div>

      <div className="flex items-center mt-2 mb-8 justify-between overflow-auto gap-3" ref={songContainerRef}> 
        {songs.map((song, index) => (
          <div key={song._id} onClick={() => playwithid(index)} className="cursor-pointer">
            <HomeSongs image={song.image} name={song.name} desc={song.desc} id={song._id} />
          </div>
        ))}
      </div>
    </div>
  );
} 