import { React, useEffect, useState } from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./VistaParticipantes.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

export const VistaParticipantes = () => {
  const [participantesData, setParticipantesData] = useState(null);
  const [participanteSeleccionado, setParticipanteSeleccionado] =
    useState(null);

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
        setParticipantesData(random(response.data.participantes));
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (participantesData === null) {
    return <div>Cargando...</div>;
  }

  if (participanteSeleccionado) {
    return (
      <>
        <div className="personaContainer">
          <div className="persona">
            <Link to="/vistaparticipantes" className="backArrow">
              <AiOutlineArrowLeft />
            </Link>
            <div className="quote">
              <h2>"{participanteSeleccionado.cuña}"</h2>
            </div>

            <div>
              <h1 className="title">
                {participanteSeleccionado.nombreParticipante}
              </h1>
              <img
                src={participanteSeleccionado.mainImg}
                alt=""
                className="imgPersona"
              />
            </div>
            <div className="categorias">
              <Link to="/vistavideo" className="categoria">
                FAMILIA
              </Link>
              <Link to="/vistavideo" className="categoria">
                MIEDO
              </Link>
              <Link to="/vistavideo" className="categoria">
                AMOR
              </Link>
              <Link to="/actosentido" className="categoria">
                ACTOSENTIDO
              </Link>
              <Link to="/vistavideo" className="categoria">
                CUERPO
              </Link>
              <Link to="/vistavideo" className="categoria">
                LIBERTAD
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div>
          <a className="backArrow" href="#choice">
            <AiOutlineArrowLeft />
          </a>
        </div>
        <div className="containerVistaParticipantes">
          <h1 className="titleParticipantes"> PARTICIPANTES </h1>
          <div className="participantesContainer">
            {Array.from(participantesData).map((participantes) => (
              <div
                className="participante"
                key={participantes.id}
                onClick={() => setParticipanteSeleccionado(participantes)}
              >
                <img className="participanteImg" src={participantes.mainImg} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
