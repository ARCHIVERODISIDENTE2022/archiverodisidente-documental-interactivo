import './Flechas.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import clickSFX from '@/src/clickSFX'

export default function FlechaAdelante () {
  return (
    <>
      <AiOutlineArrowRight onClick={clickSFX} className='flecha black' />
    </>
  )
}
