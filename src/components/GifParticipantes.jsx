import React from "react";
import { Link } from "react-router-dom";
import "./GifParticipantes.css"

export const GifParticipantes = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <Link to="/vistavideo">
        <img className="gifParticipanteStatic" src={participante.frameGif}/>
        <img className="gifParticipanteActive"src={participante.gif} />
        <audio src={participante.mp3Cuña}></audio>
      </Link>
    </div>
  );
};
