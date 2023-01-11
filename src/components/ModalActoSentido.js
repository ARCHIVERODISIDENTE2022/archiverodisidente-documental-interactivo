import React from "react";

const ModalActoSentido = () => {
    return (
        <>
        <div className="overlay">
            <div className="contenedorModal">
                <h1 className="recomendacion">RECOMENDACIÓN</h1>
                <h2 className="textoRecomendacion">Antes de ingresar a esta el “ACTOSENTIDO” te recomendamos ver al menos una de las otras categorías o participantes.</h2>
                <button className="back">VOLVER A FORMAS DE NAVEGACIÓN</button>
                <button className="go">SEGUIR EN ACTOSENTIDO</button>
            </div>
        </div>
        </>
    )
}

export default ModalActoSentido;