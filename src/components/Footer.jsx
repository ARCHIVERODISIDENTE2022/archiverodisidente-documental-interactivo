import { Link } from "react-router-dom";
import "./styles/Footer.css"

const Footer = () => {
    return(
        <>
<div className="footer">
    <Link to="#choice" className="">FORMA DE NAVEGACIÓN |</Link> 
    <Link to="/retribucion" className=""> | RETRIBUCIÓN</Link>
    <Link to="/creditos" className="">| CRÉDITOS</Link>
    </div>       
     </>
    )
};

export default Footer