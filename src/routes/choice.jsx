import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <>
      <div className="choice" id="slide-choice">
        <h1 className="choiceText">ELIGE LA FORMA EN LA QUE DESEAS NAVEGAR</h1>
        <div className="btnChoice">
          <Link to="/vistaparticipantes" className="choiceParticipantes">
            {" "}
            PARTICIPANTES{" "}
          </Link>
          <Link to="/vistacategorias" className="choiceCategorias">
            {" "}
            CATEGORÍAS{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Choice;
