import React from "react";
import "./Categorias.css";

export const FamiliaContent = ({ participante }) => {
  return (
    <div className="containerCategoria">
      <img
        className="imgCategoria"
        src={participante.categoria[3].imgObjeto}
      />
    </div>
  );
};
