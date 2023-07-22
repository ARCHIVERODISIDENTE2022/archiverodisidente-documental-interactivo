'use client'

import Link from 'next/link.js'
import './Footer.css'
import { useEffect, useState } from 'react'

export function Footer () {
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])
  return (
    <footer className='footer'>
      <Link onClick={()=>audio.play()} href='/' id='backHome'>INICIO</Link>
      <Link onClick={()=>audio.play()} href='/navegacion' id='toNavegacion'>NAVEGACIÓN</Link>
      <Link onClick={()=>audio.play()} href='/creditos' id='toCreditos'>CRÉDITOS</Link>
    </footer>
  )
}
