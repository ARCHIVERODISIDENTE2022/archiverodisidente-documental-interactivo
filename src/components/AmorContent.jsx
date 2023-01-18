import React from "react";
import "./Categorias.css";


export const AmorContent = ({ participante }) => {
  return (
    <div className="containerCategoria">
      <img
        className="imgCategoria"
        src={participante.categoria[0].imgObjeto}
      />
    </div>
  );
};
