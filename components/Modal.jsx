import ReactModal from 'react-modal'
import './Modal.css'

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Modal'
      ariaHideApp={false}
      id='modalContainer'
    >
      {children}
    </ReactModal>
  )
}

export default Modal
