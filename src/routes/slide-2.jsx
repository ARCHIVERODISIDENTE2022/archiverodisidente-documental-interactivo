import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slide2 = () => {
    return (
        <div className="third" id="slide-2">
          <h1 className="thirdText">
            Nos muestran otros <span>paisajes y vivencias.</span>{" "}
          </h1>
          <div>
            <a className="arrow" href="slide-3">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      )
}
export default Slide2;

