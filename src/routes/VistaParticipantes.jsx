import { React, useContext, useEffect, useState } from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
import axios from "axios";
import Footer from "../components/Footer";
import "./VistaParticipantes.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';

const url =
    "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

export const VistaParticipantes = () => {
    const [participantes, setParticipantes] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setParticipantes(response.data.participantes);
            } catch (error) {
                // Manejar el error acá
            }
        }

        fetchData();
    }, []);

    if (participantes === null) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="vistaParticipantes">
               <a className="backArrow" href="#choice">
               <AiOutlineArrowLeft/>
                    </a>
                            <h1 className="title">PARTICIPANTES</h1>
            {participantes.map((participante) => {
                return <>
                            <ListaParticipantes participante={participante} />
                        
                    </>
      })}
      <Footer />
    </div >
  );
};
