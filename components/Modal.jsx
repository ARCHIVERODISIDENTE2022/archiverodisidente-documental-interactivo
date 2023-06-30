import { relative } from 'path'
import ReactModal from 'react-modal'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(217, 217, 217, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: relative,
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '600px',
    margin: 'auto',
    padding: '10px',
    border: '6px solid #000',
    borderRadius: '0px',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none'
  }
}

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Modal'
      ariaHideApp={false}
      id='modalContainer'
      style={customStyles}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
