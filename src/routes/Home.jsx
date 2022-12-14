import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <div className="flex flex-col justify-center items-center w-auto h-screen" id="first">
          <img className="w-50 h-60 px-5 pt-5 mb-9 mt-12"
            src="/src/img/archiveroicono.png"
            alt="Archivero icono"
          />
          <div className="ml-12 pl-7 mt-5">
            <h1 className="flex md:flex-row-reverse	 font-bold text-2xl text-left ml-14 m-3 pr-10 pl-12 ">BIENVENIDXS A ARCHIVERO DISIDENTE DIGITAL</h1>
          </div>
          <a className="flex absolute bottom-10 "id="arrow" href="#second">
            <i className="fa-solid fa-right-long fa-4x"></i></a>

        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen " id="second">
          <h1 className="text-center text-2xl mx-5 my-5">
            Los viajes nos desplazan, nos mueven de un lugar a otro, <b className="font-black">nos
              movilizan.</b>
          </h1>
          <div>
            <a className="flex bottom-10 lg:right-5" href="#third">
              <i className="fa-solid fa-right-long fa-3x"></i>   </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen" id="third">
          <h1 className="text-center text-2xl mx-12 my-5">Nos muestran otros <b className="font-black">paisajes y vivencias.</b> </h1>
          <div>
            <a className="flex " href="#fourth">
              <i className="fa-solid fa-right-long fa-3x"></i>            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen bg-black m-0" id="fourth">
          <h1 className="text-white	text-3xl my-5">Nos cambian_</h1>
          <div>
            <a className="flex" href="#fifth">
              <i className="fa-solid fa-right-long fa-3x text-white"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen" id="fifth">
          <h1 className="text-center text-2xl mx-5 my-5">Te invitamos a este viaje, en el cual <b className="font-black">no estas solx.</b></h1>
          <div>
            <a className="flex" href="#sixth">
              <i className="fa-solid fa-right-long fa-3x"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen bg-black p-5" id="sixth">
          <h2 className="text-white mx-5 mb-5 lg:px-20 text-justify font-xs tracking-tighter leading-snug">
            “Creo que es importante que la gente que pueda contar su historia la cuente, porque hay muchas personas que buscan historias parecidas que intentan ubicarse en algún lugar del mundo.”
          </h2>
          <h1 className="text-white text-left text-lg ml-5 mr-10 pr-12 font-black">VALENTI, PURRANQUE, X REGIÓN.</h1>
          <h2 className="text-white mx-5 my-5 text-justify font-xs tracking-tighter leading-snug	">
            “Mi mama tenía unas muñecas y yo se las sacaba po. Pero siempre los chiquillos jugaban a la pelota y a mi no me gustaba, yo era seca pa la cuerda.”
          </h2>
          <h1 className="text-white text-left text-lg ml-5 mr-10 pr-12 font-black">KATHERINE, QUILLOTA, V REGIÓN.</h1>
          <h2 className="text-white mx-5 my-5 text-justify font-xs tracking-tighter leading-snug">
            “El miedo queda contigo, una aprende a abrazarse, a darse calma decirte ya, sea lo que sea que te haya dado miedo en un momento de la vida que no te achique, que no te haga sentir menos que el miedo no sea más grande que tu.”
          </h2>
          <h1 className="text-white text-left text-lg ml-5 mr-10 pr-12 font-black">TURQUESA LILA MENTOLADA, ILLAPEL, IV REGIÓN.</h1>
          <div>
            <a className="flex absolute right-10" href="#instructions">
              <i className="fa-solid fa-right-long fa-3x text-white"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen" id="instructions">
          <img
            className="archiveroicono"
            src="img/archiveroicono.png"
            alt="Archivero"
          />
          <h1 className="text-left font-black text-2xl pr-10 mr-10">INSTRUCCIONES</h1>
          <h2 className="text-justify px-10 mx-8 tracking-tighter	leading-tight	">
            “Archivero Disidente es un <b className="font-black italic">documental interactivo</b> que posee dos formas para navegar por los contenidos. Puedes comenzar por lxs <b className="font-black italic">participantes o por las categorías.</b> Recuerda que con las flechas puedes desplazarte hacia adelante o atrás. Y <b className="font-black italic">tranquilx,</b> siempre puedes guiarte por el <b className="font-black italic">menú que se encontrará en la parte inferior de la pantalla,</b> ahí también encontrarás distintas configuraciones para hacer de este <b className="font-black italic">viaje, un experiencia significativa”.</b>
          </h2>

          <div>
            <a href="#choice">
              <h2 className="mt-5 px-7 py-1 border-black border-4 border-solid text-xl font-black">COMENZAR EL VIAJE</h2>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-auto h-screen bg-black " id="choice">
          <h1 className="text-white text-center mx-12 px-9 mb-5 text-xl font-black">ELIGE LA FORMA EN LA QUE DESEAS NAVEGAR</h1>
          <Link to="/vistaparticipantes" className="text-white px-8 py-5 border-white border-4 border-solid text-xl font-black mb-5"> PARTICIPANTES </Link>
          <Link to="/vistacategorias" className="text-white px-12 py-5 border-white border-4 border-solid text-xl font-black"> CATEGORÍAS </Link>
        </div>
      </div>


    </>
  );
};

export default Home;
