'use client'

import Image from 'next/image'
import Link from 'next/link.js'
import { dataRandomizada } from '@/src/randomizar'
import styles from '../../participantes/participantes.module.css'
import ModalActoSentido from '@/components/ModalActoSentido'
import { useEffect, useState } from 'react'

export default function Categoria ({ params }) {
  const buscarIndiceCategoria = p => p.categoria.findIndex(c => c.nombre === categoria)
  const { categoria } = params
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])

  return (
    <>
      {categoria === 'actosentido' && <ModalActoSentido />}
      <h2 className='titleCategoria'>{categoria.toUpperCase()}</h2>
      <div className={styles.tilesContainer}>
        {dataRandomizada.map(p => (
          <div className='participante' key={p.id}>
            <Link href={`/navegacion/categorias/${categoria}/${p.id}`}>
              <Image onClick={()=>audio.play()} className='imagenes-participantes' alt={p.id} width={100} height={100} src={`/${p.categoria[buscarIndiceCategoria(p)].imgObjeto}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
