'use client'

import Image from 'next/image'
import Link from 'next/link.js'
import { dataRandomizada } from '@/src/randomizar'
import styles from './participantes.module.css'
import { useEffect, useState } from 'react'

export default function Participantes () {
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])
  return (
    <>
      <h2 className='titleCategoria'>PARTICIPANTES</h2>
      <div className={styles.tilesContainer}>
        {dataRandomizada.map(p => (
          <div className='participante' key={p.id}>
            <Link href={`/navegacion/participantes/${p.id}`}>
              <Image onClick={()=>audio.play()} className='imagenes-participantes' alt={p.id} width={100} height={100} src={`/${p.imagenPerfil}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
