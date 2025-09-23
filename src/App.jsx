import React, { useContext } from "react";
import Sidebar from "./Components/Sidebar";
import { Player } from "./Components/Player";
import Display from "./Components/Display";
import { Playercomponent } from "./Components/Context/Playercomponent.jsx";

const App = () => {
  const { audioRef, track} =
    useContext(Playercomponent);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <Player />

      { track && <audio ref={audioRef} src={track.file} preload="auto"></audio>}
    </div>
  );
};

export default App;
