import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FaRegClock } from "react-icons/fa6";
import HomeSongs from './HomeSongs'
import { Playercomponent } from './Context/Playercomponent.jsx';

export default function DisplayAlbum() {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/album/list";
    axios.get(url)
      .then(res => {
        console.log("Albums:", res.data);
        setAlbums(res.data.albums);
      })
      .catch(error => console.error('Error fetching albums:', error));
  }, []);
  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios.get(url)
      .then(res => {
        console.log("Songs:", res.data);
        setSongs(res.data.songs);
      })
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const albumdata = albums.find(album => album._id === id);

  if (!albumdata) return <p>Loading album...</p>;

  const { playwithid } = useContext(Playercomponent);

  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row items-end'>
        <img className='w-60 h-60' src={albumdata.image} alt={albumdata.name} />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumdata.name}
          </h2>
          <h4 className="">{albumdata.desc}</h4>
          <p className="mt-1 gap-2">
            <b>Playly</b>
             • 1,325,458 likes • <b>104 Songs</b> about 6 hr 37 min 
          </p>
          
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-col-5 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p className='mr-4'><b>#</b>Tittle</p>
        <p className="">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <FaRegClock className=' w-4 '/>
        </div>
        <hr />
         {songs.map((song, index) => (
                  <div key={index} onClick={() => playwithid(index)} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-sm hover:bg-[#ffffff26] rounded cursor-pointer">
                    <p className="text-white">
                        <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                        <img className='inline w-10 mr-5' src={song.image} alt="" />
                        {song.name}
                    </p>
                    <p className="text-[15px]">{albumdata.name}</p>
                    <p className="text-[15px] hidden sm:block">5 days ago</p>
                    <p className="text-[15px]">{song.duration}</p>
                  </div>
                ))}

    </>
  );
}
