'use client'

import Modal from '@/components/Modal'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link.js'
import dataParticipantes from '../../../../../public/assets/data.json'
import styles from '../../participantes/participantes.module.css'

export default function Categoria ({ params }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const getCategoryIndex = persona => persona.categoria.findIndex(c => c.nombre === categoria)
  const { categoria } = params

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
      <div className='titleCategoria'><h2>{categoria.toUpperCase()}</h2></div>
      <div className='colContainer'>
        <div className={styles.tilesContainer}>
          {dataParticipantes.map(p => (
            <div className='participante' key={p.id}>
              <Link href={`/navegacion/categorias/${categoria}/${p.id}`}>
                <Image alt={p.id} width={100} height={100} src={`/${p.categoria[getCategoryIndex(p)].imgObjeto}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
