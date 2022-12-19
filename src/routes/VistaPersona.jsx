import { React, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json";

const VistaPersona = () => {
  const [persona, setPersona] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setPersona(response.data.persona);
      } catch (error) {}
    }

    fetchData();
  }, []);

  if (persona === null) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="w-auto h-screen scroll-m-0">
        <div className="flex flex-col w-auto h-screen justify-center content-center mx-5 ">
          <Link
            to="/vistaparticipantes"
            className="flex flex-row-reverse mr-1 lg:mr-3 lg:pr-2"
          >
            <i className="flex fa-solid fa-left-long fa-2x"></i>
          </Link>
          <h1 className="font-black text-center text-2xl border-black border-4 border-solid z-10 mx-12 mt-5">
            {participantes.nombreParticipante}
          </h1>
          <img
            src={participante.mainImg}
            alt=""
            className="border-black border-4 border-solid z-50"
          />
          <h2 className="text-center m-2">
            “CREO EN OTRAS PALABRAS MÁS REGIAS, COMO LA REBELDÍA, EL DESACATO,
            LA INSURRECCIÓN. ESTAS PALABRAS QUE SIGNIFICAN UN QUIEBRE O UNA
            GRIETA”
          </h2>
          <div className="grid grid-cols-2">
            <Link
              to="/vistavideo"
              className="flex justify-center m-2 py-1 border-black border-4 border-solid text-2xl font-black"
            >
              FAMILIA
            </Link>
            <Link
              to="/vistavideo"
              className="flex justify-center m-2 py-1 border-black border-4 border-solid text-2xl font-black"
            >
              MIEDO
            </Link>
            <Link
              to="/vistavideo"
              className="flex justify-center m-2 py-1 border-black border-4 border-solid text-2xl font-black"
            >
              AMOR
            </Link>
            <Link
              to="/vistavideo"
              className="flex justify-center m-2 py-1 border-black border-4 border-solid text-2xl font-black"
            >
              ACTOSENTIDO
            </Link>
            <Link
              to="/vistavideo"
              className="flex justify-center m-2 py-1 border-black border-4 border-solid text-2xl font-black"
            >
              CUERPO
            </Link>
            <Link
              to="/vistavideo"
              className="flex justify-center m-2 py-1 border-black border-4 border-solid text-2xl font-black"
            >
              LIBERTAD
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default VistaPersona;
