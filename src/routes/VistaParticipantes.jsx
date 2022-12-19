import { React, useEffect, useState } from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
//import { contextParticipantes } from "../context/DataProvider";
import axios from "axios";
import Footer from "../components/Footer";

const url =
  "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

export const VistaParticipantes = () => {
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
      <a href="#choice" />
      <div>
        <h1> PARTICIPANTES </h1>
      </div>
      <div className="participantes">
        {participantes.map((participante) => {
          return (
            <>
              <div>
                <ListaParticipantes participante={participante} />
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

// const VistaParticipantes = () => {

//     return (
//
//     )
// }

// export default VistaParticipantes
