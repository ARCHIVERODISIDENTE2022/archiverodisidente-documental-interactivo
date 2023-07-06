import Link from 'next/link.js'
import FlechaBlancaAdelante from '@/components/FlechaBlancaAdelante'

export default function p2 () {
  return (
    <section className='column-section black-background'>
      <div className='texto-intro-container'>
        <p id='nosCambian'><b>Nos cambian_</b></p>
      </div>
      <div className='flechasInicio'>
        <Link href='/intro/p4'><FlechaBlancaAdelante /></Link>
      </div>
    </section>
  )
}
