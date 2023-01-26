import Footer from "../components/Footer";
import "./ContainerCategoria.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/dataParticipantes.json";

const Familia = () => {
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
    return <div>Cargando...</div>;
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
              {categoriaSeleccionada.nombreParticipante}
            </h3>
            <h3 className="informationData">
              Categoria: {categoriaSeleccionada.categoria[2].nombre}
            </h3>
            <h3 className="informationData">
              Región: {categoriaSeleccionada.ubicacion.region}
            </h3>
            <h3 className="informationData">
              Comuna: {categoriaSeleccionada.ubicacion.comuna}
            </h3>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              margin="auto"
              position="absolute"
              src={categoriaSeleccionada.categoria[2].videoObjeto}
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
          <h1 className="nameCategoria">FAMILIA</h1>
            <div className="containerCategoria">
              {random(Array.from(participantesData)).map((participantes) => (
                <div
                  className="participante"
                  key={participantes.id}
                  onClick={() => setCategoriaSeleccionada(participantes)}
                >
                  <img
                    className="participanteImg"
                    src={participantes.categoria[2].imgObjeto}
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
export default Familia;
