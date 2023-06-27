import Link from 'next/link.js'
import FlechaAdelante from '@/components/FlechaAdelante'

export default function p2 () {
  return (
    <div className='intro'>
      <p className='textoIntro'>Nos muestran otros  <b>paisajes y vivencias</b></p>
      <div className='flechasInicio'>
        <Link href='/intro/p3'><FlechaAdelante /></Link>
      </div>
    </div>
  )
}
