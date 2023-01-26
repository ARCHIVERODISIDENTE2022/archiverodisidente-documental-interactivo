import React from "react";
import "./GifParticipantes.css";
import axios from "axios";


const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/dataParticipantes.json";


export const GifParticipantes = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <img className="gifParticipanteStatic" src={participante.frameGif} />
        <img className="gifParticipanteActive" src={participante.gif} />
      <audio src={participante.mp3Cuña}></audio>
    </div>
  );
};
