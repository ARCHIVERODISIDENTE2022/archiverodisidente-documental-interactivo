import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slide5 = () => {
    return (
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
          <a className="arrowSixth" href="slide-instructions">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      )
}
export default Slide5;

