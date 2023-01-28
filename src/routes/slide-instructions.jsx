import React from "react";
import blackLogo from "/assets/logos/LOGO-NEGRO.png";
import "./Home.css";

const SlideInstructions = () => {
    return (
      <div className="instructions" id="slide-instructions">
      <img className="blackLogo" src={blackLogo} alt="" />
      <h1 className="instructionsTitle">INSTRUCCIONES</h1>
      <p className="instructionsText">
        “Archivero Disidente es un{" "}
        <span className="boldItalic">documental interactivo</span> que narra
        acerca de los procesos identitarios de 14 personas de las
        disidencias sexuales en Chile; un registro participativo de su
        archivo en vida.
        <p className="two">
          Tienes dos formas de navegar por el contenido:
          <span className="boldItalic">
            por participantes o por categorías.
          </span>
          Recuerda que puedes desplazarte hacia adelante o atrás con las
          flechas. Y <span className="boldItalic">tranquilx,</span> siempre
          puedes guiarte por el{" "}
          <b className="boldItalic">
            menú que se encontrará en la parte inferior de la pantalla.
          </b>
        </p>
      </p>

      <div>
        <div className="btnInstructions">
          <a className="btnText" href="choice">
            COMENZAR EL VIAJE
          </a>
        </div>
      </div>
    </div>
      )
}
export default SlideInstructions;

