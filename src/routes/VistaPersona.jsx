import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./VistaPersona.css"


const url =
  "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

const Vistaparticipante = () => {
  const [participante, setparticipante] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setparticipante(response.data.participantes);
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (participante === null) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="personaContainer">
          <Link to="/vistaparticipantes" className="backArrow">
            <AiOutlineArrowLeft />
          </Link>
          <h2 className="cuña">
            “CREO EN OTRAS PALABRAS MÁS REGIAS, COMO LA REBELDÍA, EL DESACATO,
            LA INSURRECCIÓN. ESTAS PALABRAS QUE SIGNIFICAN UN QUIEBRE O UNA
            GRIETA”
          </h2>
          <section className="categoriasIzq">
            <Link to="/vistavideo" className="categoria">
              FAMILIA
            </Link>
            <Link to="/vistavideo" className="categoria">
              MIEDO
            </Link>
            <Link to="/vistavideo" className="categoria">
              AMOR
            </Link>
            </section>
            <main className="infoPersona">
          <h1 className="nombrePersona">{participante.nombreparticipante}</h1>
          <img src={participante.mainImg} alt="" className="imgPersona" /></main>
          <section className="categoriasDer">
          
            <Link to="/vistavideo" className="categoria">
              ACTOSENTIDO
            </Link>
            <Link to="/vistavideo" className="categoria">
              CUERPO
            </Link>
            <Link to="/vistavideo" className="categoria">
              LIBERTAD
            </Link>
            </section>
        <Footer />
      </div>
    </>
  );
};

export default Vistaparticipante;
