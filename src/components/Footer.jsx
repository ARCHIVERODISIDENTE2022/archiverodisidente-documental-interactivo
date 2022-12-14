import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
<div className="flex flex-row justify-around p-2 items-center w-full h-auto bg-black text-xs">
    <Link to="#choice" className="text-white">FORMA DE NAVEGACIÓN |</Link> 
    <Link to="/retribucion" className="text-white"> | RETRIBUCIÓN</Link>
    <Link to="/creditos" className="text-white">| CRÉDITOS</Link>
    </div>       
     </>
    )
};

export default Footer