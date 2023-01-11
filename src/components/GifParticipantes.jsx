import React from "react";
import { Link } from "react-router-dom";
import "./GifParticipantes.css"

export const GifParticipantes = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <Link to="/actosentido">
        <img className="gifParticipante" src={participante.gif} />{" "}
      </Link>
    </div>
  );
};
