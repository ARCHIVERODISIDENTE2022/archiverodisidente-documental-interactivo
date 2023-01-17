import React from "react";

export const AmorContent = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <img
        className="gifParticipanteStatic"
        src={participante.categoria[0].imgObjeto}
      />
    </div>
  );
};
