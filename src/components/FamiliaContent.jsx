import React from "react";
import { Link } from "react-router-dom";

export const FamiliaContent = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <img
        className="gifParticipanteStatic"
        src={participante.categoria[3].imgObjeto}
      />
    </div>
  );
};
