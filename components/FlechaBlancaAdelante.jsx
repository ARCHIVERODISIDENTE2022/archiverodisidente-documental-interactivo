'use client'

import './Flechas.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export default function FlechaBlancaAdelante () {
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])
  return (
    <>
      <AiOutlineArrowRight onClick={()=>audio.play()} className='flecha white' />
    </>
  )
}
