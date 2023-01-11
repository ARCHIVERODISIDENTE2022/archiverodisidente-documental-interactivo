import React from "react";
import { Link } from "react-router-dom";
import "./ModalActoSentido.css"

const ModalActoSentido = () => {
    return (
        <>
        <div className="overlay">
            <div className="contenedorModal">
                <h1 className="recomendacion">RECOMENDACIÓN</h1>
                <h2 className="textoRecomendacion">Antes de ingresar a esta el “ACTOSENTIDO” te recomendamos ver al menos una de las otras categorías o participantes.</h2>
                <div className="buttons">
                <Link to="/vistacategorias" className="back">VOLVER A FORMAS DE NAVEGACIÓN</Link>
                <button className="go">SEGUIR A ACTOSENTIDO</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalActoSentido;