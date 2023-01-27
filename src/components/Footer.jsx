import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import music from "../data/mp3/Leit-Motiv.mp3";
import { GrPlayFill } from "react-icons/gr"
import { GrPause } from "react-icons/gr"

const Footer = () => {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (playing) {
      handlePlay();
    }
    else { handlePause(); }
  
  }, [!playing],

);

function handleClick() {
  setPlaying(!playing);
}

const handlePlay = () => {
  audioRef.current.play();
  setPlaying(true);
}

const handlePause = () => {
  audioRef.current.pause();
  setPlaying(false);
}

const handleVolume = (e) => {
  setVolume(e.target.value);
  audioRef.current.volume = e.target.value / 100;
}

return (
  <>
    <footer className="footer">
    <Link to="/" className="backHome">
        VOLVER AL INICIO 
      </Link>
      <Link to="/choice" className="formaNavegacion">
      | FORMA DE NAVEGACIÓN |
      </Link>
      <Link to="/retribucion" className="toRetribucion">
        {" "}
        | RETRIBUCIÓN </Link>
      <Link to="/creditos" className="toCreditos">| CRÉDITOS   
      </Link>
      <div className="audioPlayer"> |
        <audio ref={audioRef} src={music} />
        <button className="btn" onClick={handleClick}>{playing ? <GrPause className="btnMusic" size={'1rem'} /> : <GrPlayFill className="btnMusic" size={'1rem'} />} </button>
        <input className="volume" type="range" min={0} max={100} value={volume} onChange={handleVolume} />
      </div>
    </footer>
  </>
);
};

export default Footer;
