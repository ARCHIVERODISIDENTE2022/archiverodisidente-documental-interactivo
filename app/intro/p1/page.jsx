import Link from 'next/link.js'
import FlechaAdelante from '@/components/FlechaAdelante'

export default function p1 () {
  return (
    <div className='intro'>
      <p className='textoIntro'>Los viajes nos desplazan, nos mueven de un lugar a otro, <b>nos movilizan</b></p>
      <div className='flechasInicio'>
        <Link href='/intro/p2'><FlechaAdelante /></Link>
      </div>
    </div>
  )
}
