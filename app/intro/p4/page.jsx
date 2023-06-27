import Link from 'next/link.js'
import FlechaAdelante from '@/components/FlechaAdelante'

export default function p2 () {
  return (
    <div className='intro'>
      <p className='textoIntro'>Te invitamos a este viaje, en el cual <b>no estas solx._</b></p>
      <div className='flechasInicio'>
        <Link href='/intro/p5'><FlechaAdelante /></Link>
      </div>
    </div>
  )
}
