import Link from 'next/link.js'
import FlechaAdelante from '@/components/FlechaAdelante'

export default function p2 () {
  return (
    <section className='column-section'>
      <div className='texto-intro-container'>
        <p className='textoIntro'>Te invitamos a este viaje, en el cual <b>no estás solx._</b></p>
      </div>
      <div className='flechasInicio'>
        <Link href='/intro/p5'><FlechaAdelante /></Link>
      </div>
    </section>
  )
}
