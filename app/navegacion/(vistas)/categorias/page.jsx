'use client'

import Link from 'next/link.js'
import styles from './categoria.module.css'
import { useEffect, useState } from 'react'

export default function Categorias () {
  const categorias = ['familia', 'miedo', 'amor', 'actosentido', 'cuerpo', 'libertad']
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])

  return (
    <>
      <h2 className='titleCategoria'>CATEGORÍAS</h2>
      <div id='contenido-categoria'>
        <div className={styles.row}>
          {categorias.map(nombre => (
            <Link onClick={()=>audio.play()} key={nombre} href={`/navegacion/categorias/${nombre}`} className='ctgr'>{nombre.toUpperCase()}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
