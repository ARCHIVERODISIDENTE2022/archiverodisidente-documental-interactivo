import Footer from "../components/Footer";
import "./ActoSentido.css"
import { React, useEffect, useState } from "react";
import axios from "axios";
import { GifParticipantes } from "../components/gifParticipantes";
// import ModalActoSentido from "../components/ModalActoSentido";

const url =
  "https://raw.githubusercontent.com/ARCHIVERODISIDENTE2022/archiverodisidente-documental-interactivo/main/src/data/archiveroMock.json";

const ActoSentido = () => {
    const [participantes, setParticipantes] = useState(null);

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
        } catch (error) {
        }
      }
  
      fetchData();
    }, []);
  
    if (participantes === null) {
      return <div>Cargando...</div>;   }

    return (
        <>
        {/* <ModalActoSentido/> */}
        <div className="vistaActoSentido">
            <h1 className="titleParticipantes">ACTOSENTIDO_</h1>
            <div className="gifParticipantes">
        {random(Array.from(participantes)).map((participantes) => {
          return <GifParticipantes participante={participantes} />;
        })}
      </div>
            <Footer />
            </div>
        </>
    )
};

export default ActoSentido