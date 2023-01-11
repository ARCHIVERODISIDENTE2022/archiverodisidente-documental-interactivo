import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ModalVideo = () => {
    return (
        <>
        <div className="overlayVideo">
            <div className="contenedorModalVideo">
            <AiOutlineArrowLeft />
            <h1 className="nombrePersona">{participante.nombreparticipante}</h1>
            <h2 className="categoriaPersona">{participante.categoria}</h2>
            <h2 className="ubicacionPersona">{participante.ubicacion}</h2>
            <video className="videoPersona">{participante.categoria.videoObjeto}</video>
            </div>
        </div>
        </>
    )
}

export default ModalVideo;