'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dataParticipantes from '../../../../../../public/assets/data.json'
import Modal from '@/components/Modal'

export default function Participante ({ params }) {
  const router = useRouter()

  const { id, categoria } = params
  const [isModalOpen, setIsModalOpen] = useState(true)
  const getCategoryIndex = persona => persona.categoria.findIndex(c => c.nombre === categoria)
  const videoURL = dataParticipantes[id].categoria[getCategoryIndex(dataParticipantes[id])].videoObjeto
  const nombreParticipante = dataParticipantes[id].nombreParticipante
  const ubicacion = dataParticipantes[id].ubicacion

  const closeModal = () => setIsModalOpen(false)
  const goBack = () => {
    router.back()
  }

  return (
    <>
      {categoria === 'actosentido' && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>RECOMENDACIÓN</h2>
          <p id='modalText'>Antes de ingresar a esta el “ACTOSENTIDO” te recomendamos ver al menos una de las otras categorías o participantes.</p>
          <div className='row' id='modalBtns'>
            <button className='btnModal' onClick={goBack}>Volver atrás</button>
            <button className='btnModal' onClick={closeModal}>Seguir a Actosentido</button>
          </div>
        </Modal>
      )}
      <div className='data'>
        <h3 className='informationName'>{nombreParticipante}</h3>
        <h3 className='informationData'>Categoría: {categoria}</h3>
        <h3 className='informationData'>Región: {ubicacion.region}</h3>
        <h3 className='informationData'>Comuna: {ubicacion.comuna}</h3>
      </div>
      <iframe width='420' height='315' src={videoURL} />
    </>
  )
}
