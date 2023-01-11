import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const VistaPersona = () => {
  if (selectedParticipant) {
    return (
      <div>
        <img
          src={participanteSeleccionado.mainImg}
          alt=""
          className="imgPersona"
        />
      </div>
    );
  }
};

// const url =
//   "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

// const Vistaparticipante = () => {
//   const [participante, setparticipante] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(url);
//         setparticipante(response.data.participantes);
//       } catch (error) {}
//     }

//     fetchData();
//   }, []);

//   if (participante === null) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <>
//       <div className="personaContainer">
//         <div className="persona">
//           <Link to="/vistaparticipantes" className="backArrow">
//             <AiOutlineArrowLeft />
//           </Link>
//           <h2 className="quote">
//             “CREO EN OTRAS PALABRAS MÁS REGIAS, COMO LA REBELDÍA, EL DESACATO,
//             LA INSURRECCIÓN. ESTAS PALABRAS QUE SIGNIFICAN UN QUIEBRE O UNA
//             GRIETA”
//           </h2>

//           <h1 className="title">{participante.nombreparticipante}</h1>
//           <img src={participante.mainImg} alt="" className="imgPersona" />
//           <div className="categorias">
//             <Link to="/vistavideo" className="categoria">
//               FAMILIA
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               MIEDO
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               AMOR
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               ACTOSENTIDO
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               CUERPO
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               LIBERTAD
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Vistaparticipante;
