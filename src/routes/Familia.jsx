import Footer from "../components/Footer";
import "./Familia.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { FamiliaContent } from "../components/FamiliaContent";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Modal from "react-modal";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

const Familia = () => {
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
      <div className="vistaActoFamilia">
        <h1 className="title">FAMILIA</h1>
        <div>
          {random(Array.from(participantes)).map((participantes) => {
            return (
              <>
                <button
                  onClick={() => setModalIsOpen(true)}
                  key={participantes.id}
                  className="categoria"
                >
                  <FamiliaContent participante={participantes} />
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
        <Footer />
      </div>
    </>
  );
};

export default Familia;
>>>>>>> fa5464616efb591a5a9c753728cfe829ee77e431
