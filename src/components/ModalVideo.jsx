// import Modal from 'react-modal'
// import { React } from "react";
// // import { AiOutlineArrowLeft } from "react-icons/ai";
// import "./ModalVideo.css"

// export default class ModalVideo extends React.Component {
//     // const [participante, setparticipante] = useState(null);

//     constructor () {
//         super();
//         this.openModal = this.openModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//         this.state = {
//             open: false
//         }
//     }

//     openModal () { this.setState(
//         {open: true});
//         $(function(){
//             $("#custom-modal").appendTo("categoria");
//         });
//     }

//     closeModal () {

//         this.setState({open: false});
//     }

//     componentDidMount(){
//         $(function(){
//             $("#custom-modal").appendTo("#categoria");
//         });
//     }

//     render () {

//         return (
//             <div>
//                 <button onClick={this.openModal}>My modal</button>
//                 <Modal id="custom-modal" isOpen={this.state.open} onRequestClose={this.closeModal}>

//                 <div className="overlayVideo">
//             <div className="contenedorModalVideo">
//                 <button className="close"><AiOutlineArrowLeft /></button>
//                 <h1>Holaaaaaa</h1>
//             {/* <h1 className="nombrePersona">{participante.nombrPparticipante}</h1>
//             <h2 className="categoriaPersona">{participante.categoria}</h2>
//             <h2 className="ubicacionPersona">{participante.ubicacion}</h2> */}
//             {/* <video className="videoPersona">{participante.categoria.videoObjeto}</video> */}
//             </div>
//         </div>
//                     <button onClick={this.closeModal}>Close</button>
//                 </Modal>
//             </div>
//         );
//     }
// }
