import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./VistaParticipantes.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Modal from "react-modal";
import VideoContent from "../components/VideoContent";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

export const VistaParticipantes = () => {
  const [participantesData, setParticipantesData] = useState(null);
  const [participanteSeleccionado, setParticipanteSeleccionado] =
    useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            <Link to="/#choice" className="backArrow">
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
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                FAMILIA
              </button>
              <Modal isOpen={modalIsOpen}>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="backArrow"
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
                  className="backArrow"
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
              <Modal isOpen={modalIsOpen}>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="backArrow"
                >
                  <AiOutlineArrowLeft />
                </button>
                <div className="video">
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
              <button
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                ACTOSENTIDO
              </button>
              <Modal isOpen={modalIsOpen}>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="backArrow"
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
                  className="backArrow"
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
                  className="backArrow"
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
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="containerVistaParticipantes">
          <div>
            <a className="backArrow" href="/#choice">
              <AiOutlineArrowLeft />
            </a>
          </div>
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
