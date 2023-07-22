'use client'

import { useRouter } from 'next/navigation'
import './Flechas.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export default function FlechaAtras () {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/audio/click.wav'))
  }, [])
  return (
    <>
      <button onClick={goBack} id='btnArrow'><AiOutlineArrowLeft onClick={() => audio.play()} className='flecha' /></button>
    </>
  )
}
