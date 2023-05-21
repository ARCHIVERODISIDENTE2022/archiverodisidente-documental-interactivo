import Link from 'next/link.js'
import Image from 'next/image'
import arrowWhite from '../../../assets/icons/arrow-white.svg'

export default function p2 () {
  return (
    <div className='intro intro-black'>
      <p><b>Nos cambian_</b></p>
      <div className='arrowForward'>
        <Link href='/intro/p4'><Image src={arrowWhite} height={48} alt='arrow' /></Link>
      </div>
    </div>
  )
}
