import Footer from "../components/Footer";
import { React, useEffect, useState } from "react";
import axios from "axios";
import "./ContainerCategoria.css";
import { MiedoContent } from "../components/MiedoContent";
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

const Miedo = () => {
  const [participantes, setParticipantes] = useState(null);
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
        setParticipantes(response.data.participantes);
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (participantes === null) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="vista">
          <a className="backArrow" href="/vistacategorias">
            <AiOutlineArrowLeft />
          </a>
          <h1 className="title">MIEDO</h1>
         
          <div className="imgParticipantes">
            {random(Array.from(participantes)).map((participantes) => {
              return (
                <>
                  <button
                    onClick={() => setModalIsOpen(true)}
                    key={participantes.id}
                    className="personCategoria"
                  >
                    <MiedoContent participante={participantes} />
                  </button>
                  <Modal isOpen={modalIsOpen} style={customStyles}>
                    <div className="over">
                      <button
                        onClick={() => setModalIsOpen(false)}
                        key={participantes.id}
                        className="close"
                      >
                        <AiOutlineArrowLeft />
                      </button>
                      <div className="data">
                        <h3 className="informationName">
                          {participantes.nombreParticipante}
                        </h3>
                        <h3 className="informationData">
                          Categoria: {participantes.categoria[2].nombre}
                        </h3>
                        <h3 className="informationData">
                          Región: {participantes.ubicacion.region}
                        </h3>
                        <h3 className="informationData">
                          Comuna: {participantes.ubicacion.comuna}
                        </h3>
                      </div>
                      <div className="video">
                        <iframe
                          width="560"
                          height="315"
                          src={participantes.categoria[1].videoObjeto}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                </div>

                    </div>
                  </Modal>
                  {/* <div className="loadingContainer">Cargando...
          <div className="loading"></div>
          </div> */}
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

export default Miedo;
