import './Flechas.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import clickSFX from '@/src/clickSFX'

export default function FlechaBlancaAdelante () {
  return (
    <>
      <AiOutlineArrowRight onClick={clickSFX} className='flecha white' />
    </>
  )
}
