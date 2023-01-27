import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./VistaParticipantes.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "white",
    display: "flex",
    margin: "0 auto",
    top: "0",
    left: "0",
  },
};

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/dataParticipantes.json";

export const VistaParticipantes = () => {
  const [participantesData, setParticipantesData] = useState(null);
  const [participanteSeleccionado, setParticipanteSeleccionado] =
    useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const navigate = useNavigate();
  const handleClickback = () => {
    navigate("/choice");
  };

  const handleClick = () => {
    setCategoriaSeleccionada(null);
  };

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
    return (
      <div className="loadingContainer">
        Cargando...
        <div className="loading"></div>
      </div>
    );
  }
  if (categoriaSeleccionada) {
    return (
      <>
        <div className="over">
          <button className="close" onClick={handleClick}>
            <AiOutlineArrowLeft />
          </button>
          <div className="data">
            <h3 className="informationName">
              {participanteSeleccionado.nombreParticipante}
            </h3>
            <h3 className="informationData">
              Categoria:
              {
                participanteSeleccionado.categoria[categoriaSeleccionada - 1]
                  .nombre
              }
            </h3>
            <h3 className="informationData">
              Región: {participanteSeleccionado.ubicacion.region}
            </h3>
            <h3 className="informationData">
              Comuna: {participanteSeleccionado.ubicacion.comuna}
            </h3>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              margin="auto"
              position="absolute"
              src={
                participanteSeleccionado.categoria[categoriaSeleccionada - 1]
                  .videoObjeto
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </>
    );
  }
  console.log(categoriaSeleccionada);

  if (participanteSeleccionado) {
    return (
      <>
        <div className="container">
          <div className="personaContainer">
            <button className="bckArrow" onClick={handleClick}>
              <AiOutlineArrowLeft />
            </button>
            <div className="cuña">
              <h2>"{participanteSeleccionado.cuña}"</h2>
            </div>
            <div className="info">
              <img
                src={participanteSeleccionado.mainImg}
                alt=""
                className="imgPersona"
              />
                 <h1 className="name">
                {participanteSeleccionado.nombreParticipante}
              </h1>
              <button className="btnPlay" onClick={() => setModalIsOpen(true)}>
                <svg
                  version="1.1"
                  id="play"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnslink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="100px"
                  width="100px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 100 100"
                  xmlSpace="preserve"
                >
                  <path
                    className="stroke-solid"
                    fill="none"
                    stroke="#000"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  <path
                    className="icon"
                    fill="#000"
                    d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                  />
                </svg>
              </button>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="containerModal">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    className="backArrowModal"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="video">
                    <iframe
                      width="560"
                      height="315"
                      src={participanteSeleccionado.presentacion}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="categoriasIzq">
              <button
                onClick={() => setCategoriaSeleccionada(3)}
                className="categoria"
              >
                FAMILIA
              </button>
              <button
                onClick={() => setCategoriaSeleccionada(2)}
                className="categoria"
              >
                MIEDO
              </button>

              <button
                onClick={() => setCategoriaSeleccionada(1)}
                className="categoria"
              >
                AMOR
              </button>
            </div>
            <div className="categoriasDer">
              <button
                onClick={() => setCategoriaSeleccionada(6)}
                className="categoria"
              >
                ACTOSENTIDO
              </button>

              <button
                onClick={() => setCategoriaSeleccionada(4)}
                className="categoria"
              >
                CUERPO
              </button>

              <button
                onClick={() => setCategoriaSeleccionada(5)}
                className="categoria"
              >
                LIBERTAD
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="containerVistaParticipantes">
          <button className="backArrow" onClick={handleClickback}>
            <AiOutlineArrowLeft />
          </button>
          <h1 className="titleParticipantes"> PARTICIPANTES </h1>
          <div className="participantesContainer">
            {random(Array.from(participantesData)).map((participantes) => (
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