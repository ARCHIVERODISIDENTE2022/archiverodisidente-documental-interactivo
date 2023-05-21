import Link from 'next/link.js'
import Image from 'next/image'
import arrow from '../../../assets/icons/arrow.svg'

export default function p2 () {
  return (
    <div className='intro'>
      <p>Nos muestran otros  <b>paisajes y vivencias</b></p>
      <div className='arrowForward'>
        <Link href='/intro/p3'><Image src={arrow} height={48} alt='arrow' /></Link>
      </div>
    </div>
  )
}
