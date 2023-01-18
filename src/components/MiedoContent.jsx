import React from "react";

export const MiedoContent = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <img
        className="gifParticipanteStatic"
        src={participante.categoria[1].imgObjeto}
      />
    </div>
  );
};
