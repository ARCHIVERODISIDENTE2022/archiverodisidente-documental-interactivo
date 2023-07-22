'use client'

import Modal from '@/components/Modal'
import './ModalActosentido.css'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ModalActoSentido () {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])

  const closeModal = () => {
    setIsModalOpen(false)
    audio.play()
  }
  const goBack = () => {
    router.back()
    audio.play()
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
