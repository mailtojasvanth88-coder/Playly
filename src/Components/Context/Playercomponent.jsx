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

  // fetch songs
  useEffect(() => {
    const url = "https://spotgpt-backend.onrender.com/api/song/list";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPost(res.data.songs);
        setTrack(res.data.songs[3]); 
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

  const  playwithid= async (id)=>{
    await setTrack(post[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }



  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = () => {
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
  }, []);

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
    playwithid
  };

  return (
    <Playercomponent.Provider value={contextValue}>
      {props.children}
    </Playercomponent.Provider>
  );
};

export default PlayercomponentProvider;
