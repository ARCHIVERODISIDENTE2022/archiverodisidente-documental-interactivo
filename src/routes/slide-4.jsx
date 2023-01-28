import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slide4 = () => {
    return (
        <div className="fifth" id="slide-4">
        <h1 className="fifthText">
          Te invitamos a este viaje, en el cual <span>no estas solx.</span>
        </h1>
        <div>
          <a className="arrow" href="slide-5">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      )
}
export default Slide4;

