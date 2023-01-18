import React from "react";
import "./Categorias.css";

export const MiedoContent = ({ participante }) => {
  return (
    <div className="containerCategoria">
      <img
        className="imgCategoria"
        src={participante.categoria[1].imgObjeto}
      />
    </div>
  );
};
