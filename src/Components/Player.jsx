import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Player = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/album/list";
    axios.get(url)
      .then(res => {
        console.log(res.data);  // debug
        setPost(res.data.albums); // ✅ only albums array
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='h-[10%] bg-black flex items-center justify-center text-white px-4 gap-20'> 
      {post.map((album, index) => (
        <div className="hidden lg:flex items-center  bg-red-500 " key={album._id}>
          <img src={album.image} alt={album.name} className="w-10 h-10 rounded" />
          <span>{album.name}</span>
        </div>
      ))}
    </div>
  ) 
}
