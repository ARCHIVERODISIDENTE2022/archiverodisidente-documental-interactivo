import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./ModalActoSentido.css"
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, .5)',
    }
  };
const ModalActoSentido = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
 
    return (
        <>
          <Modal isOpen={modalIsOpen}
            style={customStyles}
            >
          
        <div className="overlay">
            <div className="contenedorModal">
                <h1 className="recomendacion">RECOMENDACIÓN</h1>
                <h2 className="textoRecomendacion">Antes de ingresar a esta el “ACTOSENTIDO” te recomendamos ver al menos una de las otras categorías o participantes.</h2>
                <div className="buttons">
                <Link to="/vistacategorias" className="back">VOLVER A FORMAS DE NAVEGACIÓN</Link>
                <button onClick={() => setModalIsOpen(false)} className="go">SEGUIR A ACTOSENTIDO</button>
                </div>
            </div>
        </div>
        </Modal>
        </>
    )
}

export default ModalActoSentido;