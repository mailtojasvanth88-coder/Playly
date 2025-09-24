import React, { createContext, useRef, useState, useEffect, use } from "react";
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

  // fetch songs
  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPost(res.data.songs);
        setTrack(res.data.songs[0]); 
      })
      .catch((error) => console.error("Error:", error));
  }, []);

 useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.file; 
      if (playStatus) {
        audioRef.current.play();
      }   
    }
  }, [track]);


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

  
  
  const nextTrack=()=>{
    const currentIndex= post.findIndex((p)=>p._id===track._id);
    const nextIndex=(currentIndex+1)%post.length;
    setTrack(post[nextIndex]);
    audioRef.current.play();
    setPlayStatus(true);
  }
  const prevTrack=()=>{
    const currentIndex= post.findIndex((p)=>p._id===track._id);
    const prevIndex=(currentIndex-1+post.length)%post.length;
    setTrack(post[prevIndex]);
    audioRef.current.play();
    setPlayStatus(true);
  }
 const loop =()=>{
    audioRef.current.currentTime=0;
    audioRef.current.play();
    setPlayStatus(true);
  } 
   const suffle =()=>{
    const randomIndex=Math.floor(Math.random()*post.length);
    setTrack(post[randomIndex]);  
    audioRef.current.play();
    setPlayStatus(true);
  }

  const  playwithid= async (id)=>{
    await setTrack(post[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }
  



  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = () => {
      seekBar.current.style.width = (Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100 + "%";

      // Update time state
      setTime({
        currentTime: {
          seconds: Math.floor(audioRef.current.currentTime % 60),
          minutes: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          seconds: Math.floor(audioRef.current.duration % 60),
          minutes: Math.floor(audioRef.current.duration / 60),
        },
      });
    };
  }, [track]);

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
    playwithid,
    nextTrack,
    prevTrack,
    loop,
    suffle
  };

  return (
    <Playercomponent.Provider value={contextValue}>
      {props.children}
    </Playercomponent.Provider>
  );
};

export default PlayercomponentProvider;
