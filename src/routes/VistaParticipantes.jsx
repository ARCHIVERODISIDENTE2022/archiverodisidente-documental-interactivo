import { React, useContext, useEffect, useState } from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
//import { contextParticipantes } from "../context/DataProvider";
import axios from "axios";

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
      {participantes.map((participante) => {
        return <ListaParticipantes participante={participante} />;
      })}
    </div>
  );
};

// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

// const VistaParticipantes = () => {

//     return (
//         <>
//             <div className="w-auto h-screen justify-between">
//                 <a className="flex flex-row-reverse mr-1 lg:mr-3 lg:pr-2" href="#choice">
//                     <i className="flex fa-solid fa-left-long fa-2x "></i>
//                 </a>
//                 <div className="flex flex-col justify-center content-center mx-5 py-5 lg:mx-7 lg:px-10">
//                     <div className="flex justify-center lg:mx-10 lg:px-4 lg:flex-wrap">
//                     <h1 className="flex font-black text-4xl justify-center px-4 py-2 lg:mx-10 lg:grow-0  border-black border-4 border-solid">PARTICIPANTES</h1></div>
//                     <div className="grid grid-cols-2 justify-items-center lg:grid-cols-7">
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                         <Link to="/participantes"><img src="src/img/p00.jpeg" alt="" className="border-black border-4 border-solid m-2" />                    </Link>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     )
// }

// export default VistaParticipantes
