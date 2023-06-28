'use client'

import Modal from '@/components/Modal'
import './ModalActosentido.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ModalActoSentido () {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => setIsModalOpen(false)
  const goBack = () => {
    router.back()
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>RECOMENDACIÓN</h2>
        <p id='modalText'>Antes de ingresar a esta el “ACTOSENTIDO” te recomendamos ver al menos una de las otras categorías o participantes.</p>
        <div className='row' id='modalBtns'>
          <button className='btnModal' onClick={goBack}>Volver atrás</button>
          <button className='btnModal' onClick={closeModal}>Seguir a Actosentido</button>
        </div>
      </Modal>
    </>
  )
}
