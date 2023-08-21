'use client'

import './Flechas.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import clickSFX from '@/src/clickSFX'
import Link from 'next/link.js'

const FlechaAdelante = ({ href, color }) => {
  return (
    <div className='flechasInicio'>
      <Link rel='icon' href={href}>
        <AiOutlineArrowRight onClick={clickSFX} className={`flecha ${color}`} />
      </Link>
    </div>
  )
}

export default FlechaAdelante
