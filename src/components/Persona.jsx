import React from "react";
import { Link } from "react-router-dom";

export const Persona = ({ participante }) => {
  return (
    <div className="container">
      <Link to="/vistapersona">
        <img className="participante" src={participante.mainImg} />{" "}
      </Link>
    </div>
  );
};
