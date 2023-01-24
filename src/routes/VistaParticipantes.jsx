import { React, useEffect, useState } from "react";
import axios from "axios";
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
      } catch (error) { }
    }

    fetchData();
  }, []);

  if (participantesData === null) {
    return <div className="loadingContainer">Cargando...
      <div className="loading"></div>
    </div>;
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
<button onClick={() => setModalIsOpen(true)}>
              <svg version="1.1" id="play" xmlns="http://www.w3.org/2000/svg" xmlnsLink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100px" width="100px"
                viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <path className="stroke-solid" fill="none" stroke="#000" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"/>
                <path className="icon" fill="#000" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z" />
              </svg></button>
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
                onClick={() => setModalIsOpen(true)}
                className="categoria"
              >
                FAMILIA
              </button>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="over">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participanteSeleccionado.id}
                    className="close"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="data">
                    <h3 className="informationName">
                      {participanteSeleccionado.nombreParticipante}
                    </h3>
                    <h3 className="informationData">
                      Categoria: {participanteSeleccionado.categoria[2].nombre}
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
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="over">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participanteSeleccionado.id}
                    className="close"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="data">
                    <h3 className="informationName">
                      {participanteSeleccionado.nombreParticipante}
                    </h3>
                    <h3 className="informationData">
                      Categoria: {participanteSeleccionado.categoria[1].nombre}
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
                      src={participanteSeleccionado.categoria[1].videoObjeto}
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
                AMOR
              </button>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="over">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participanteSeleccionado.id}
                    className="close"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="data">
                    <h3 className="informationName">
                      {participanteSeleccionado.nombreParticipante}
                    </h3>
                    <h3 className="informationData">
                      Categoria: {participanteSeleccionado.categoria[0].nombre}
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
                      src={participanteSeleccionado.categoria[0].videoObjeto}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
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
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="over">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participanteSeleccionado.id}
                    className="close"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="data">
                    <h3 className="informationName">
                      {participanteSeleccionado.nombreParticipante}
                    </h3>
                    <h3 className="informationData">
                      Categoria: {participanteSeleccionado.categoria[5].nombre}
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
                      src={participanteSeleccionado.categoria[5].videoObjeto}
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
                CUERPO
              </button>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="over">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participanteSeleccionado.id}
                    className="close"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="data">
                    <h3 className="informationName">
                      {participanteSeleccionado.nombreParticipante}
                    </h3>
                    <h3 className="informationData">
                      Categoria: {participanteSeleccionado.categoria[3].nombre}
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
                      src={participanteSeleccionado.categoria[3].videoObjeto}
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
                LIBERTAD
              </button>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="over">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participanteSeleccionado.id}
                    className="close"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <div className="data">
                    <h3 className="informationName">
                      {participanteSeleccionado.nombreParticipante}
                    </h3>
                    <h3 className="informationData">
                      Categoria: {participanteSeleccionado.categoria[4].nombre}
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
                      src={participanteSeleccionado.categoria[4].videoObjeto}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
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
