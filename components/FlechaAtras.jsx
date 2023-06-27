'use client'

import { useRouter } from 'next/navigation'
import './Flechas.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function FlechaAtras () {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <>
      <button onClick={goBack} id='btnArrow'><AiOutlineArrowLeft className='flecha' /></button>
    </>
  )
}
