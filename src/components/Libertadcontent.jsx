import React from "react";
import "./Categorias.css";

export const LibertadContent = ({ participante }) => {
  return (
    <div className="containerCategoria">
      <img
        className="imgCategoria"
        src={participante.categoria[4].imgObjeto}
      />
    </div>
  );
};
