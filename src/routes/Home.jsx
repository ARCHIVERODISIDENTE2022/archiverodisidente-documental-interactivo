import React, { useRef, useEffect } from "react";
import "./Home.css";
import logo from "/assets/logos/GIF-PRINCIPAL-.14591821.gif";
import { AiOutlineArrowRight } from "react-icons/ai";
import music from "../data/mp3/Leit-Motiv.mp3";

const Home = () => {
  const audio = useRef(null);
  useEffect(() => {
    audio.current.play();
  }, []);
  return (
    <>
      <div className="App">
        <audio className="volume-progressbar" ref={audio} src={music} />
        <div className="first" id="#home">
          <img className="logo" src={logo} alt="Archivero icono" />
          <h1 className="welcome">REGISTROS 2021 - 2022</h1>
          <p className="subWelcome">
            ¿CÓMO IMAGINAS QUE SERÁ CONTADA TU HISTORIA EN EL FUTURO?
          </p>
          <a className="firstArrow" href="slide-1">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
