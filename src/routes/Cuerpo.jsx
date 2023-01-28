import Footer from "../components/Footer";
import { React, useEffect, useState } from "react";
import axios from "axios";
import "./ContainerCategoria.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/dataParticipantes.json";

const Cuerpo = () => {
  const [participantesData, setParticipantesData] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const random = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const handleClick = () => {
    setCategoriaSeleccionada(null);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setParticipantesData(response.data.participantes);
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (participantesData === null) {
    return <div className="loadingContainer">
    Cargando...
    <div className="loading"></div>
  </div>;  }

  if (categoriaSeleccionada) {
    return (
      <>
        <div className="over">
          <button className="close" onClick={handleClick}>
            <AiOutlineArrowLeft />
          </button>
          <div className="data">
            <h3 className="informationName">
              {categoriaSeleccionada.nombreParticipante}
            </h3>
            <h3 className="informationData">
              Categoria: {categoriaSeleccionada.categoria[3].nombre}
            </h3>
            <h3 className="informationData">
              Región: {categoriaSeleccionada.ubicacion.region}
            </h3>
            <h3 className="informationData">
              Comuna: {categoriaSeleccionada.ubicacion.comuna}
            </h3>
          </div>
          <div className="video">
          <div className="whiteLoading">
              Cargando...
              <div className="wLoading"></div>
            </div>
            <iframe              
              className="youTube"
              width="560"
              height="315"
              margin="auto"
              position="absolute"
              src={categoriaSeleccionada.categoria[3].videoObjeto}
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
  return (
    <>
      <div className="container">
        <div className="vista">
          <a className="backArrow" href="/vistacategorias">
            <AiOutlineArrowLeft />
          </a>
          <h1 className="title">CUERPO</h1>
            <div className="containerCategoria">
              {random(Array.from(participantesData)).map((participantes) => (
                <div
                  className="participante"
                  key={participantes.id}
                  onClick={() => setCategoriaSeleccionada(participantes)}
                >
                  <img
                    className="participanteImg"
                    src={participantes.categoria[3].imgObjeto}
                  />
                </div>
              ))}
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cuerpo;
