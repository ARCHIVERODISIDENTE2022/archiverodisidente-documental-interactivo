'use client'

import './Flechas.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import clickSFX from '@/src/clickSFX'
import Link from 'next/link.js'
import AudioPlayer from '@/components/AudioPlayer'

const FlechaAdelante = ({ href, color }) => {
  const musicaInicio = '/audio/home.mp3'

  return (
    <div className='flechasInicio'>
      <AudioPlayer src={musicaInicio} />
      <Link rel='icon' href={href}>
        <AiOutlineArrowRight onClick={clickSFX} className={`flecha ${color}`} />  
      </Link>
    </div>
  )
}

export default FlechaAdelante