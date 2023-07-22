'use client'

import { useRouter } from 'next/navigation'
import './Flechas.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import clickSFX from '@/src/clickSFX'

export default function FlechaAtras () {
  const router = useRouter()
  const goBack = () => {
    router.back()
    clickSFX()
  }

  return (
    <>
      <button onClick={goBack} id='btnArrow'><AiOutlineArrowLeft className='flecha' /></button>
    </>
  )
}
