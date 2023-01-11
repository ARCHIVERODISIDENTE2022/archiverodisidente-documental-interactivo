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
        <Link to="/vistavideo" className='ctgr'>FAMILIA</Link>
        <Link to="/vistavideo" className='ctgr'>MIEDO</Link>
        <Link to="/vistavideo" className='ctgr'>AMOR</Link>
        <Link to="/actosentido" className='ctgr'>ACTOSENTIDO</Link>
        <Link to="/vistavideo" className='ctgr'>CUERPO</Link>
        <Link to="/vistavideo" className='ctgr'>LIBERTAD</Link>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default VistaCategorias;
