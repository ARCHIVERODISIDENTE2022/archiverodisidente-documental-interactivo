import { Link } from "react-router-dom";
import "./styles/Footer.css";
// import song from './Suncrown - Legend of the Forgotten Centuries.mp3'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to="#choice" className="">
          FORMA DE NAVEGACIÓN |
        </Link>
        <Link to="/retribucion" className="">
          {" "}
          | RETRIBUCIÓN
        </Link>
        <Link to="/creditos" className="">
          | CRÉDITOS
        </Link>
      </div>
    </>
  );
};

export default Footer;
