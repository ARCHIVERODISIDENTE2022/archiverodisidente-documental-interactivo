import React from "react";

export const FamiliaContent = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <img
        className="gifParticipanteStatic"
        src={participante.categoria[2].imgObjeto}
      />
    </div>
  );
};
