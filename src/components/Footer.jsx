import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import music from '../data/mp3/Leit-Motiv.mp3'

const Footer = () => {
<<<<<<< HEAD
  const audio = useRef(null);
  useEffect(() => {
    audio.current.play();
  }, []);


=======
>>>>>>> 285b1a9eed9a3513a553cfe44dbf6380a919167c
  return (
    <>
      <footer className="footer">
        <Link to="/#choice" className="link">
          FORMA DE NAVEGACIÓN |
        </Link>
        <Link to="/retribucion" className="link">
          {" "}
          | RETRIBUCIÓN
        </Link>
        <Link to="/creditos" className="link">
          | CRÉDITOS
        </Link>
        <div className="volume">
<<<<<<< HEAD
        <audio className="volume-progressbar" ref={audio} src={music}/>
  					<span id="volume-progressbar" className="volume-progressbar"></span>
  					<input type="range" min="0" max="100" step="1" value="100" id="np-volume" className="volume-slider" role="progressbar"/>
				</div>
=======
          <span id="volume-progressbar" className="volume-progressbar"></span>
          {/* <input type="range" min="0" max="100" step="1" value="100" id="np-volume" class="volume-slider" role="progressbar"/> */}
        </div>
>>>>>>> 285b1a9eed9a3513a553cfe44dbf6380a919167c
      </footer>
    </>
  );
};

export default Footer;
