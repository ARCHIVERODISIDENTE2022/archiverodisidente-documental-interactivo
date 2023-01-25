import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import blackLogo from "/assets/logos/LOGO-NEGRO.png";
import logo from "/assets/logos/GIF-PRINCIPAL-.14591821.gif";
import { AiOutlineArrowRight } from "react-icons/ai";
import music from "../data/mp3/Leit-Motiv.mp3";

const Home = () => {
  const audio = useRef(null);
  useEffect(() => {
    audio.current.play();
  }, []);
  return (
    <>
      <div className="App">
        <audio className="volume-progressbar" ref={audio} src={music} />
        <div className="first" id="#home">
          <img className="logo" src={logo} alt="Archivero icono" />
          <h1 className="welcome">REGISTROS 2021 - 2022</h1>
          <p className="subWelcome">
            ¿CÓMO IMAGINAS QUE SERÁ CONTADA TU HISTORIA EN EL FUTURO?
          </p>
          <a className="firstArrow" href="#slide-1">
            <AiOutlineArrowRight />
          </a>
        </div>

        <div className="second" id="slide-1">
          <h1 className="secondText">
            Los viajes nos desplazan, nos mueven de un lugar a otro,{" "}
            <span>nos movilizan.</span>
          </h1>
          <div>
            <a className="arrow" href="#slide-2">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="third" id="slide-2">
          <h1 className="thirdText">
            Nos muestran otros <span>paisajes y vivencias.</span>{" "}
          </h1>
          <div>
            <a className="arrow" href="#slide-3">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="fourth" id="slide-3">
          <h1 className="fourthText">Nos cambian_</h1>
          <div>
            <a className="arrowWhite" href="#slide-4">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="fifth" id="slide-4">
          <h1 className="fifthText">
            Te invitamos a este viaje, en el cual <span>no estas solx.</span>
          </h1>
          <div>
            <a className="arrow" href="#slide-5">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="sixth" id="slide-5">
          <div className="quotes">
            <h2 className="quote">
              “Creo que es importante que la gente que pueda contar su historia
              la cuente, porque hay muchas personas que buscan historias
              parecidas que intentan ubicarse en algún lugar del mundo.”
            </h2>
            <h1 className="person">VALENTI, PURRANQUE, X REGIÓN.</h1>
            <h2 className="quote">
              “Mi mama tenía unas muñecas y yo se las sacaba po. Pero siempre
              los chiquillos jugaban a la pelota y a mi no me gustaba, yo era
              seca pa la cuerda.”
            </h2>
            <h1 className="person">KATHERINE, QUILLOTA, V REGIÓN.</h1>
            <h2 className="quote">
              “El miedo queda contigo, una aprende a abrazarse, a darse calma
              decirte ya, sea lo que sea que te haya dado miedo en un momento de
              la vida que no te achique, que no te haga sentir menos que el
              miedo no sea más grande que tu.”
            </h2>
            <h1 className="person">
              TURQUESA LILA MENTOLADA, ILLAPEL, IV REGIÓN.
            </h1>
            <a className="arrowSixth" href="#slide-instructions">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>

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
            <div href="#slide-choice">
              <Link to="/choice" className="choiceParticipantes">
                {" "}
                COMENZAR EL VIAJE{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
