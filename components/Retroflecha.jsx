'use client'

import { useRouter } from 'next/navigation'
import './Retroflecha.css'
import Image from 'next/image'
import arrowBack from '@/assets/icons/arrow-back.svg'

export default function Retroflecha () {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <>
      <button onClick={goBack}><Image src={arrowBack} height={48} alt='atras' /></button>
    </>
  )
}
