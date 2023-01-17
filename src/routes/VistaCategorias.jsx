import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./VistaCategorias.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

export const VistaCategorias = () => {
  const [categoriasData, setCategoriasData] = useState(null);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const random = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

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
        <div>
          <a className="backArrow" href="#choice">
            <AiOutlineArrowLeft />
          </a>
        </div>
        <section className="categorias">
          <Link to="/vistavideo" className="ctgr">
            FAMILIA
          </Link>
          <Link to="/vistavideo" className="ctgr">
            MIEDO
          </Link>
          <Link to="/vistavideo" className="ctgr">
            AMOR
          </Link>
          <Link to="/actosentido" className="ctgr">
            ACTOSENTIDO
          </Link>
          <Link to="/vistavideo" className="ctgr">
            CUERPO
          </Link>
          <Link to="/vistavideo" className="ctgr">
            LIBERTAD
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
};
