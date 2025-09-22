

import React, { createContext, useRef, useState, useEffect } from "react";
import axios from "axios";

export const Playercomponent = createContext();

const PlayercomponentProvider = (props) => {
const [post, setPost] = useState([]);
const [track, setTrack] = useState(null);
const [playStatus, setPlayStatus] = useState(false);
const [time, setTime] = useState({
 currentTime: { seconds: 0, minutes: 0 },
 totalTime: { seconds: 0, minutes: 0 },
});

const audioRef = useRef();
const seekBg = useRef();
const seekBar = useRef();

useEffect(() => {
 const url = "https://spotgpt-backend.onrender.com/api/song/list";
 axios
   .get(url)
   .then((res) => {
     console.log(res.data);
     setPost(res.data.songs);
     if (res.data.songs.length > 0) {
       setTrack(res.data.songs[0]); 
     }
   })
   .catch((error) => console.error("Error:", error));
}, []);


const playAudio = () => {
 if (audioRef.current) {
   audioRef.current.play();
   setPlayStatus(true);
 }
};

const pauseAudio = () => {
 if (audioRef.current) {
   audioRef.current.pause();
   setPlayStatus(false);
 }
};

const contextValue = {
 audioRef,
 seekBg,
 seekBar,
 track,
 setTrack,
 playStatus,
 setPlayStatus,
 time,
 setTime,
 playAudio,
 pauseAudio,
 post,
};

return (
 <Playercomponent.Provider value={contextValue}>
   {props.children}
 </Playercomponent.Provider>
);
};

export default PlayercomponentProvider;