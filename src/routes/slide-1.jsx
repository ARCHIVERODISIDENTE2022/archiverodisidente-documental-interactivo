import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slide1 = () => {
    return (
        <div className="App">
            <div className="second" id="slide-1">
                <h1 className="secondText">
                    Los viajes nos desplazan, nos mueven de un lugar a otro,{" "}
                    <span>nos movilizan.</span>
                </h1>
                <div>
                    <a className="arrow" href="slide-2">
                        <AiOutlineArrowRight />
                    </a>
                </div>
            </div>
        </div>)
}
export default Slide1;

