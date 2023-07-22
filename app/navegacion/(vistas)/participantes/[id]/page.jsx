'use client'

import Link from 'next/link.js'
import dataParticipantes from '@/public/data.json'
import styles from '../../categorias/categoria.module.css'
import { useEffect, useState } from 'react'

export default function Persona ({ params }) {
  const { id } = params
  const participante = dataParticipantes[id - 1]
  const { cuna, nombreParticipante, videoPresentacion } = participante
  const categorias = ['familia', 'miedo', 'amor', 'actosentido', 'cuerpo', 'libertad']
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])

  return (
    <>
      <div id='cuna'><p>{`"${cuna}"`}</p></div>
      <div id='contenedor-grupo-iframe'>
        <div id='contenedor-nombre-participante'>
          <h1 id='nombre-participante'>{nombreParticipante}</h1>
        </div>
        <iframe id='iframe-participante' src={videoPresentacion} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
      </div>
      <div>
        <div className={styles.row}>
          {categorias.map(nombre => (
            <Link onClick={()=>audio.play()} key={nombre} href={`/navegacion/participantes/${id}/${nombre}`} className='ctgr'>{nombre.toUpperCase()}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
