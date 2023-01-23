import { React, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./VistaParticipantes.css";
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

  const handleClick = () => {
    window.location.reload();
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
    return <div>Cargando...</div>;
  }

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
              <h1 className="name">
                {participanteSeleccionado.nombreParticipante}
              </h1>
              <img
                src={participanteSeleccionado.mainImg}
                alt=""
                className="imgPersona"
              />
            </div>
            <div className="categoriasIzq">
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                FAMILIA
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
                      src={participanteSeleccionado.categoria[2].videoObjeto}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Modal>
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                MIEDO
              </button>
              <Modal isOpen={modalIsOpen}>
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
                    src={participanteSeleccionado.categoria[1].videoObjeto}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </Modal>
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                AMOR
              </button>
              <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="backArrowModal"
                >
                  <AiOutlineArrowLeft />
                </button>
                <div className="video">
                  {/* <VideoContent
                    participanteSeleccionado={participanteSeleccionado}
                  /> */}
                  {console.log(
                    participanteSeleccionado.categoria[0].videoObjeto
                  )}
                  <iframe
                    width="560"
                    height="315"
                    src={participanteSeleccionado.categoria[0].videoObjeto}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </Modal>
            </div>
            <div className="categoriasDer">
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                ACTOSENTIDO
              </button>
              <Modal isOpen={modalIsOpen}>
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
                    src={participanteSeleccionado.categoria[5].videoObjeto}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </Modal>
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                CUERPO
              </button>
              <Modal isOpen={modalIsOpen}>
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
                    src={participanteSeleccionado.categoria[3].videoObjeto}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </Modal>
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                LIBERTAD
              </button>
              <Modal isOpen={modalIsOpen}>
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
                    src={participanteSeleccionado.categoria[4].videoObjeto}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </Modal>
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
          <a className="backArrow" href="/#slide-choice">
            <AiOutlineArrowLeft />
          </a>

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
