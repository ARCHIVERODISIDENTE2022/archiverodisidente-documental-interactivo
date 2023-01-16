// import React from 'react';
// import Modal from 'react-modal';
// import { AiOutlineArrowLeft } from "react-icons/ai";


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#categoria');

// const ModalVideo = () => {
//     let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <div className="overlayVideo">
//             <div className="contenedorModalVideo">
//             <button onClick={closeModal}><AiOutlineArrowLeft /></button>
//             <h1 className="nombrePersona">{participante.nombreParticipante}</h1>
//             <h2 className="categoriaPersona">{participante.categoria}</h2>
//             <h2 className="ubicacionPersona">{participante.ubicacion}</h2>
//             </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default ModalVideo;

// // ReactDOM.render(<App />, appElement);