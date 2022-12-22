import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./VistaCategorias.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';

const VistaCategorias = () => {

  return (
    <>

    <a className="backArrow" href="#choice">
    <AiOutlineArrowLeft/>
        </a>
        <div className="containerVistaCategoria">
        <h1 className="titleCategoria">CATEGORÍAS</h1>
        <div className="categorias">
        <Link to="/vistavideo" className='categoria'>FAMILIA</Link>
        <Link to="/vistavideo" className='categoria'>MIEDO</Link>
        <Link to="/vistavideo" className='categoria'>AMOR</Link>
        <Link to="/vistavideo" className='categoria'>ACTOSENTIDO</Link>
        <Link to="/vistavideo" className='categoria'>CUERPO</Link>
        <Link to="/vistavideo" className='categoria'>LIBERTAD</Link>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default VistaCategorias;
