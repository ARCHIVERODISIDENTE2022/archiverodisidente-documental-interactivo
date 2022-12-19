import React from "react";
import { Link } from "react-router-dom";
import "./ListaParticipantes.css";

export const ListaParticipantes = ({ participante }) => {
  return (
    <div className="container">
      <button>
        <img
          src={participante.mainImg}
          alt="profileImg"
          // onClick={this.myfunction}
        />
      </button>
      {/* <Link to="/vistapersona">  
      <img className="participante" src={participante.mainImg}/> </Link> */}
    </div>
  );
};
