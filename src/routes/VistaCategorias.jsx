import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const VistaCategorias = () => {

  return (
    <>
    <a className="flex flex-row-reverse	" href="#choice">
          <i className="flex  fa-solid fa-left-long fa-2x "></i>
        </a>
      <div className="flex flex-col w-auto h-screen justify-center content-center mx-5 py-5 ">
        
        <h1 className="font-black text-center text-5xl">CATEGORÍAS</h1>
        <Link to="/vistavideo" className='flex justify-center mx-12 my-2 py-1 border-black border-4 border-solid text-2xl font-black'>FAMILIA</Link>
        <Link to="/vistavideo" className='flex justify-center mx-12 my-2 py-1 border-black border-4 border-solid text-2xl font-black'>MIEDO</Link>
        <Link to="/vistavideo" className='flex justify-center mx-12 my-2 py-1 border-black border-4 border-solid text-2xl font-black'>AMOR</Link>
        <Link to="/vistavideo" className='flex justify-center mx-12 my-2 py-1 border-black border-4 border-solid text-2xl font-black'>ACTOSENTIDO</Link>
        <Link to="/vistavideo" className='flex justify-center mx-12 my-2 py-1 border-black border-4 border-solid text-2xl font-black'>CUERPO</Link>
        <Link to="/vistavideo" className='flex justify-center mx-12 my-2 py-1 border-black border-4 border-solid text-2xl font-black'>LIBERTAD</Link>
      </div>
      <Footer/>

    </>
  );
};

export default VistaCategorias;
