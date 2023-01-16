import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import logo from '../data/gif/GIF-PRINCIPAL-.gif'
import logoNegro from '../assets/img/LOGO-NEGRO.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import music from '../data/mp3/Leit-Motiv.mp3'


const Home = () => {
  const audio = useRef(null);
  useEffect(() => {
    audio.current.play();
  }, []);
    return (
    <>
      <div className="App">
      <audio className="volume-progressbar" ref={audio} src={music}/>
        <div className="first" id="first">
          <img className="logo"
            src={logo}
            alt="Archivero icono"
          />
          <h1 className="welcome">REGISTROS 2021 - 2022
<p>¿CÓMO IMAGINAS QUE SERÁ CONTADA TU HISTORIA EN EL FUTURO?</p></h1>
          <a className="firstArrow" href="#second">
            < AiOutlineArrowRight />
          </a>

        </div>

        <div className="second" id="second">
          <h1 className="secondText">
            Los viajes nos desplazan, nos mueven de un lugar a otro, <span>nos
              movilizan.</span>
          </h1>
          <div>
            <a className="arrow" href="#third">
            < AiOutlineArrowRight />
   </a>
          </div>
        </div>

        <div className="third" id="third">
          <h1 className="thirdText">Nos muestran otros <span>paisajes y vivencias.</span> </h1>
          <div>
            <a className="arrow" href="#fourth">
            < AiOutlineArrowRight />
           </a>
          </div>
        </div>

        <div className="fourth" id="fourth">
          <h1 className="fourthText">Nos cambian_</h1>
          <div>
            <a className="arrowWhite" href="#fifth">
            < AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="fifth" id="fifth">
          <h1 className="fifthText">Te invitamos a este viaje, en el cual <span>no estas solx.</span></h1>
          <div>
            <a className="arrow" href="#sixth">
            < AiOutlineArrowRight />
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
            < AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="instructions" id="instructions">
        <img className="logoNegro"
            src={logoNegro}
            alt=""
          />
          <h1 className="titleInstrucciones">INSTRUCCIONES</h1>
          <h2 className="instructionsText">
            “Archivero Disidente es un <b><i>documental interactivo</i></b> que narra acerca de los procesos identitarios de 14 personas de las disidencias sexuales en Chile; un registro participativo de su archivo en vida. Tienes dos formas de navegar por el contenido: <span className="boldItalic"> por participantes o por categorías.</span> Recuerda que puedes desplazarte hacia adelante o atrás con las flechas. Y <span className="boldItalic">tranquilx,</span> siempre puedes guiarte por el <span className="boldItalic">menú que se encontrará en la parte inferior de la pantalla.</span> 
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
