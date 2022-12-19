import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {

  return (
    <>
      <div className="App">
        <div className="first" id="first">
          <img className="logo"
            src="/src/img/archiveroicono.png"
            alt="Archivero icono"
          />
            <h1 className="welcome">BIENVENIDXS A ARCHIVERO DISIDENTE DIGITAL</h1>
          <a className="firstArrow" href="#second">
            <i className="fa-solid fa-right-long"></i></a>

        </div>

        <div className="second" id="second">
          <h1 className="secondText">
            Los viajes nos desplazan, nos mueven de un lugar a otro, <span>nos
              movilizan.</span>
          </h1>
          <div>
            <a className="arrow" href="#third">
              <i className="fa-solid fa-right-long"></i>   </a>
          </div>
        </div>

        <div className="third" id="third">
          <h1 className="thirdText">Nos muestran otros <span>paisajes y vivencias.</span> </h1>
          <div>
            <a className="arrow" href="#fourth">
              <i className="fa-solid fa-right-long"></i>            </a>
          </div>
        </div>

        <div className="fourth" id="fourth">
          <h1 className="fourthText">Nos cambian_</h1>
          <div>
            <a className="arrowWhite" href="#fifth">
              <i className="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>

        <div className="fifth" id="fifth">
          <h1 className="fifthText">Te invitamos a este viaje, en el cual <span>no estas solx.</span></h1>
          <div>
            <a className="arrow" href="#sixth">
              <i className="fa-solid fa-right-long "></i>
            </a>
          </div>
        </div>

        <div className="sixth" id="sixth">
          <h2 className="quote">
            “Creo que es importante que la gente que pueda contar su historia la cuente, porque hay muchas personas que buscan historias parecidas que intentan ubicarse en algún lugar del mundo.”
          </h2>
          <h1 className="person">VALENTI, PURRANQUE, X REGIÓN.</h1>
          <h2 className="quote">
            “Mi mama tenía unas muñecas y yo se las sacaba po. Pero siempre los chiquillos jugaban a la pelota y a mi no me gustaba, yo era seca pa la cuerda.”
          </h2>
          <h1 className="person">KATHERINE, QUILLOTA, V REGIÓN.</h1>
          <h2 className="quote">
            “El miedo queda contigo, una aprende a abrazarse, a darse calma decirte ya, sea lo que sea que te haya dado miedo en un momento de la vida que no te achique, que no te haga sentir menos que el miedo no sea más grande que tu.”
          </h2>
          <h1 className="person">TURQUESA LILA MENTOLADA, ILLAPEL, IV REGIÓN.</h1>
          <div>
            <a className="arrowSixth" href="#instructions">
              <i className="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>

        <div className="instructions" id="instructions">
          <img
            className="logo"
            src="/src/img/archiveroicono.png"
            alt="Archivero"
          />
          <h1 className="text-left font-black text-2xl pr-10 mr-10">INSTRUCCIONES</h1>
          <h2 className="instructionsText">
            “Archivero Disidente es un <b><i>documental interactivo</i></b> que posee dos formas para navegar por los contenidos. Puedes comenzar por lxs <span className="boldItalic">participantes o por las categorías.</span> Recuerda que con las flechas puedes desplazarte hacia adelante o atrás. Y <span className="boldItalic">tranquilx,</span> siempre puedes guiarte por el <span className="boldItalic">menú que se encontrará en la parte inferior de la pantalla,</span> ahí también encontrarás distintas configuraciones para hacer de este <span className="boldItalic">viaje, un experiencia significativa”.</span>
          </h2>

          <div>
            <a href="#choice">
              <h2 className="viaje">COMENZAR EL VIAJE</h2>
            </a>
          </div>
        </div>

        <div className="choice" id="choice">
          <h1 className="choiceText">ELIGE LA FORMA EN LA QUE DESEAS NAVEGAR</h1>
          <div className="btnChoice">
          <Link to="/vistaparticipantes" className="choiceParticipantes"> PARTICIPANTES </Link>
          <Link to="/vistacategorias" className="choiceCategorias"> CATEGORÍAS </Link>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
