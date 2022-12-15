import React from "react";
import { Link } from "react-router-dom";

export const ListaParticipantes = ({ participante }) => {
  return (
    <div>
      <Link to="/vistapersona">  
      <img className="border-black border-4 border-solid m-2" src={participante.mainImg}/> </Link>
    </div>
  );
};
