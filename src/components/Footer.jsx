import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link to="#choice" className="link">
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
          <span id="volume-progressbar" className="volume-progressbar"></span>
          {/* <input type="range" min="0" max="100" step="1" value="100" id="np-volume" class="volume-slider" role="progressbar"/> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
