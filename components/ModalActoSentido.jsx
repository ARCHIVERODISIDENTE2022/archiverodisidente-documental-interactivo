'use client'

import Modal from '@/components/Modal'
import './ModalActosentido.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import clickSFX from '@/src/clickSFX'

export default function ModalActoSentido () {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => {
    setIsModalOpen(false)
    clickSFX()
  }
  const goBack = () => {
    router.back()
    clickSFX()
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>RECOMENDACIÓN</h2>
        <p id='modalText'>Antes de ingresar a “ACTOSENTIDO” te recomendamos ver el contenido de al menos una categoría o participante.</p>
        <div className='row' id='modalBtns'>
          <button className='btnModal' onClick={goBack}>VOLVER ATRÁS</button>
          <button className='btnModal' onClick={closeModal}>SEGUIR A ACTOSENTIDO</button>
        </div>
      </Modal>
    </>
  )
}
