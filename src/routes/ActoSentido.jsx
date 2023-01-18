import Footer from "../components/Footer";
import "./ActoSentido.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { GifParticipantes } from "../components/gifParticipantes";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Modal from "react-modal";
import ModalActoSentido from "../components/ModalActoSentido";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

const ActoSentido = () => {
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
    <ModalActoSentido/>
    <div className="container">
      <div className="vistaActoSentido">
          <a className="backArrow" href="/#choice">
            <AiOutlineArrowLeft />
          </a>
        <h1 className="title">ACTOSENTIDO_</h1>
        <div className="gifParticipantes">
          {random(Array.from(participantes)).map((participantes) => {
            return (
              <>
                <button
                  onClick={() => setModalIsOpen(true)}
                  key={participantes.id}
                  className="personCategoria"
                >
                  <GifParticipantes participante={participantes} />
                </button>
                <Modal isOpen={modalIsOpen}>
                  <button
                    onClick={() => setModalIsOpen(false)}
                    key={participantes.id}
                    className="backArrow"
                  >
                    <AiOutlineArrowLeft />
                  </button>
                </Modal>
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
