import Link from 'next/link.js'
import Image from 'next/image'
import arrow from '../../../assets/icons/arrow.svg'

export default function p1 () {
  return (
    <div className='intro'>
      <p className='textoIntro'>Los viajes nos desplazan, nos mueven de un lugar a otro, <b>nos movilizan</b></p>
      <div className='arrowForward'>
        <Link href='/intro/p2'><Image src={arrow} height={48} alt='arrow' /></Link>
      </div>
    </div>
  )
}
