import Link from 'next/link.js'
import FlechaAdelante from '@/components/FlechaAdelante'

export default function p2 () {
  return (
    <section className='column-section'>
      <div className='texto-intro-container'>
        <p className='textoIntro'>Nos muestran otros  <b>paisajes y vivencias</b></p>
      </div>
      <div className='flechasInicio'>
        <Link href='/intro/p3'><FlechaAdelante /></Link>
      </div>
    </section>
  )
}
