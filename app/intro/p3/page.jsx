import Link from 'next/link.js'
import FlechaBlancaAdelante from '@/components/FlechaBlancaAdelante'

export default function p2 () {
  return (
    <div className='intro intro-black'>
      <p id='nosCambian'><b>Nos cambian_</b></p>
      <div className='flechasInicio'>
        <Link href='/intro/p4'><FlechaBlancaAdelante /></Link>
      </div>
    </div>
  )
}
