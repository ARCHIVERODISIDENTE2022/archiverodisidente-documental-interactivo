import Footer from "../components/Footer";
import "./ActoSentido.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ModalActoSentido from "../components/ModalActoSentido";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/dataParticipantes.json";

const ActoSentido = () => {
  const [participantes, setParticipantes] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const random = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function playAudio() {
    var audio = document.getElementById("audio");
    audio.play(true);
  }

  const handleClick = () => {
    setCategoriaSeleccionada(null);
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setParticipantes(response.data.participantes);
      } catch (error) { }
    }

    fetchData();
  }, []);

  if (participantes === null) {
    return <div className="loadingContainer">
    Cargando...
    <div className="loading"></div>
  </div>
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
              Categoria: {categoriaSeleccionada.categoria[5].nombre}
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
              src={categoriaSeleccionada.categoria[5].videoObjeto}
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
      <ModalActoSentido />
      <div className="container">
        <div className="vistaActoSentido">
          <a className="backArrow" href="/vistacategorias">
            <AiOutlineArrowLeft />
          </a>
          <h1 className="title">ACTOSENTIDO_</h1>
          <div className="gifParticipantes">
            {random(Array.from(participantes)).map((participantes) => {
             return (
                <>
                  <div
                    onClick={() => setCategoriaSeleccionada(participantes)}
                    key={participantes.id}
                    className="personCategoria"
                  >
                    <img className="gifParticipanteStatic" src={participantes.categoria[5].imgObjeto} />
                    <img className="gifParticipanteActive" src={participantes.gif} />
                    <audio id="audio" src={participantes.mp3Cuña}>
                    </audio>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ActoSentido;
