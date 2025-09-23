import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



 
export const Album = ({image,name,desc,id}) => {
  
const navigate = useNavigate();  
    return (
        <div  onClick={()=>navigate(`/Playly/album/${id}`)}className= 'min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="album" className='w-[160px] h-[160px] rounded-lg'/>
        <p className='font-semibold mt-2'>{name}</p>
        <p className='text-[12px] text-[#b3b3b3] mt-1'>{desc}</p>


        </div>
    )
} 