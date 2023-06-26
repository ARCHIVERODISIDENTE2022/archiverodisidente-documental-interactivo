import Link from 'next/link.js'
import Image from 'next/image'
import arrow from '../../../assets/icons/arrow.svg'

export default function p2 () {
  return (
    <div className='intro'>
      <p className='textoIntro'>Te invitamos a este viaje, en el cual <b>no estas solx._</b></p>
      <div className='arrowForward'>
        <Link href='/intro/p5'><Image src={arrow} height={48} alt='arrow' /></Link>
      </div>
    </div>
  )
}
