// import { React, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import axios from "axios";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import "./VistaPersona.css"
// import Modal from 'react-modal';

// // const Vistaparticipante = () => {
// //   const [participante, setparticipante] = useState(null);
// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await axios.get(url);
// //         setparticipante(response.data.participantes);
// //       } catch (error) {}
// //     }

// const Vistaparticipante = () => {
//   const [participante, setparticipante] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(url);
//         setparticipante(response.data.participantes);
//       } catch (error) { }
//     }

// //   if (participante === null) {
// //     return <div>Cargando...</div>;
// //   }

//   return (
//     <>
//       <div className="personaContainer">
//         <Link to="/vistaparticipantes" className="backArrow">
//           <AiOutlineArrowLeft />
//         </Link>
//         <h2 className="cuña">
//           “CREO EN OTRAS PALABRAS MÁS REGIAS, COMO LA REBELDÍA, EL DESACATO,
//           LA INSURRECCIÓN. ESTAS PALABRAS QUE SIGNIFICAN UN QUIEBRE O UNA
//           GRIETA”
//         </h2>

//         <main className="infoPersona">
//           <h1 className="nombrePersona">{participante.nombreparticipante}</h1>
//           <img src={participante.mainImg} alt="" className="imgPersona" /></main>
//           <section className="categoriasIzq">
//             <Link to="/vistavideo" className="categoria">
//               FAMILIA
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               MIEDO
//             </Link>
//             <Link to="/vistavideo" className="categoria">
//               AMOR
//             </Link>
//           </section>
//           <section className="categoriasDer">

//         <main className="infoPersona">
//           <h1 className="nombrePersona">{participante.nombreParticipante}</h1>
//           <img src={participante.mainImg} alt="" className="imgPersona" /></main>
//         <section className="categoriasIzq">
//           <button onClick={() => setModalIsOpen(true)} className="categoria">FAMILIA</button>
//           <Modal isOpen={modalIsOpen}>
//             <button onClick={() => setModalIsOpen(false)} className="backArrow"><AiOutlineArrowLeft /></button>
//           </Modal>
//           <button onClick={() => setModalIsOpen(true)} className="categoria">MIEDO</button>
//           <Modal isOpen={modalIsOpen}>
//             <button onClick={() => setModalIsOpen(false)} className="backArrow"><AiOutlineArrowLeft /></button>
//           </Modal><button onClick={() => setModalIsOpen(true)} className="categoria">AMOR</button>
//           <Modal isOpen={modalIsOpen}>
//             <div className="overlayVideo">
//               <div className="contenedorModalVideo">
//                 <button onClick={() => setModalIsOpen(false)} className="backArrow"><AiOutlineArrowLeft /></button>
//                 <h1 className="nombrePersona">{participante.nombreParticipante}</h1>
//                 <h2 className="categoriaPersona">{participante.categoria}</h2>
//                 <h2 className="ubicacionPersona">{participante.ubicacion}</h2>
//               </div>
//             </div>
//           </Modal>
//         </section>
//         <section className="categoriasDer">

//           <Link to="/actosentido" className="categoria">
//             ACTOSENTIDO
//           </Link>
//           <Link to="/vistavideo" className="categoria">
//             CUERPO
//           </Link>
//           <Link to="/vistavideo" className="categoria">
//             LIBERTAD
//           </Link>
//         </section>

// export default Vistaparticipante;
