import React from "react";

export const LibertadContent = ({ participante }) => {
  return (
    <div className="containerActosentido">
      <img
        className="gifParticipanteStatic"
        src={participante.categoria[4].imgObjeto}
      />
    </div>
  );
};
