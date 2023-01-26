import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./VistaCategorias.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/dataParticipantes.json";

export const VistaCategorias = () => {
  const [categoriasData, setCategoriasData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setCategoriasData(response.data.participantes);
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (categoriasData === null) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="containerVistaCategoria">
          <a className="backArrow" href="/choice">
            <AiOutlineArrowLeft />
          </a>
          <h1 className="titleCategoria"> CATEGORÍAS </h1>
          <section className="categorias">
            <Link to="/familia" className="ctgr">
              FAMILIA
            </Link>
            <Link to="/miedo" className="ctgr">
              MIEDO
            </Link>
            <Link to="/amor" className="ctgr">
              AMOR
            </Link>
            <Link to="/actosentido" className="ctgr">
              ACTOSENTIDO
            </Link>
            <Link to="/cuerpo" className="ctgr">
              CUERPO
            </Link>
            <Link to="/libertad" className="ctgr">
              LIBERTAD
            </Link>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};
