import { React, useContext, useEffect, useState } from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

const VistaParticipantes = () => {
  //const context = useContext(contextParticipantes);
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
    <div>
      {participantes.map((participante) => {
        return <ListaParticipantes participante={participante} />;
      })}
    </div>
  );
};

export default VistaParticipantes;
