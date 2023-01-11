import React from "react";
import { Link } from "react-router-dom";

export const GifParticipantes = ({ participante }) => {
  return (
    <div className="container">
      <Link to="/actosentido">
        <img className="participante" src={participante.gif} />{" "}
      </Link>
    </div>
  );
};
