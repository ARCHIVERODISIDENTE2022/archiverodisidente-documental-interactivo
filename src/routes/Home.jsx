import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="App">
      <header className="App-header"></header>
        {/* <script type="module" src="main.js"></script> */}
        <div className="whiteView" id="first">
          <img
            src="/src/img/archiveroicono.png"
            className="archiveroicono"
            alt="Archivero icono"
          />
          <h1>Bienvenidxs a archivero disidente digital</h1>
          <div>
            <a className="arrow-first" href="#second">
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="whiteView" id="second">
          <h1>
            Los viajes nos desplazan, nos mueven de un lugar a otro, nos
            movilizan.{" "}
          </h1>
          <div>
            <a className="arrow" href="#third">
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="whiteView" id="third">
          <h1>Nos muestran otros paisajes y vivencias. </h1>
          <div>
            <a className="arrow" href="#fourth">
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="blackView" id="fourth">
          <h1>Nos cambian_</h1>
          <div>
            <a className="arrowwhite" href="#fifth">
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="whiteView" id="fifth">
          <h1>Te invitamos a este viaje, en el cual no estas solx.</h1>
          <div>
            <a className="arrow" href="#sixth">
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="blackView" id="sixth">
          <h2>
            “Creo que es importante que la gente que pueda contar su historia la
            cuente, porque hay muchas personas que buscan historias parecidas
            que intentan ubicarse en algún lugar del mundo.”
          </h2>
          <h1>VALENTI, PURRANQUE, X REGIÓN.</h1>
          <h2>
            “Mi mama tenía unas muñecas y yo se las sacaba po. Pero siempre los
            chiquillos jugaban a la pelota y a mi no me gustaba, yo era seca pa
            la cuerda.”
          </h2>
          <h1>KATHERINE, QUILLOTA, V REGIÓN.</h1>
          <h2>
            “El miedo queda contigo, una aprende a abrazarse, a darse calma
            decirte ya, sea lo que sea que te haya dado miedo en un momento de
            la vida que no te achique, que no te haga sentir menos que el miedo
            no sea más grande que tu.”
          </h2>
          <h1>TURQUESA LILA MENTOLADA, ILLAPEL, IV REGIÓN.</h1>
          <div>
            <a className="arrowwhite2" href="#instructions">
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="whiteView" id="instructions">
          <img
            className="archiveroicono"
            src="img/archiveroicono.png"
            alt="Archivero"
          />
          <h1>INSTRUCCIONES</h1>
          <h2>
            “Archivero Disidente es un documental interactivo que posee dos
            formas para navegar por los contenidos. Puedes comenzar por lxs
            participantes o por las categorías. Recuerda que con las flechas
            puedes desplazarte hacia adelante o atrás. Y tranquilx, siempre
            puedes guiarte por el menú que se encontrará en la parte inferior de
            la pantalla, ahí también encontrarás distintas configuraciones para
            hacer de este viaje, un experiencia significativa”.{" "}
          </h2>

          <div>
            <a href="#choice">
              <h2>Comenzar el viaje</h2>
              <span className="material-symbols-outlined">expand_more</span>
            </a>
          </div>
        </div>

        <div className="blackView" id="choice">
          <h1>Elige la forma en la que quieres navegar</h1>
          <Link to="/vistacategorias"> Categorias </Link>
          <Link to="/vistaparticipantes"> Participantes </Link>
        </div>
    </div>
  );
      
    </>
  );
};

export default Home;
