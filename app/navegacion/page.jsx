'use client'

import Link from 'next/link.js'
import './navegacion.css'
import { useEffect, useState } from 'react'

export default function Navegacion () {
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])

  return (
    <div className='navigation'>
      <h1 id='navigationText'>ELIGE LA FORMA EN LA QUE DESEAS NAVEGAR</h1>
      <div id='btnNavigation'>
        <Link onClick={()=>audio.play()} href='/navegacion/participantes' className='btnLink' id='navigationParticipantes'>PARTICIPANTES</Link>
        <Link onClick={()=>audio.play()} href='/navegacion/categorias' className='btnLink' id='navigationCategorias'>CATEGORÍAS</Link>
      </div>
    </div>
  )
}
