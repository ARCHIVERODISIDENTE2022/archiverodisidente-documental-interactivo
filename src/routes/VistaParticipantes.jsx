import { React, useEffect, useState } from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
import axios from "axios";
import Footer from "../components/Footer";

const url =
  "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

export const VistaParticipantes = () => {
  //const context = useContext(contextParticipantes);
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
        {random(Array.from(participantes)).map((participantes) => {
          return <ListaParticipantes participante={participantes} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

// {participantes.map((participante) => {
//   return (
//     <>
//       <div>
//         <ListaParticipantes participante={participante} />
//       </div>
//     </>
//   );
// })}

// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

// const VistaParticipantes = () => {

//     return (
//
//     )
// }

// export default VistaParticipantes
