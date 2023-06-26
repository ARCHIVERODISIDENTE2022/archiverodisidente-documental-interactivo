import Link from 'next/link.js'
import Image from 'next/image'
import logo from '../assets/gif/logo_inicial.gif'
import arrow from '../assets/icons/arrow.svg'
import './Home.css'
import { Roboto_Mono } from 'next/font/google' // eslint-disable-line

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: '400'
})

export default function Home () {
  return (
    <section className={robotoMono.className}>
      <div id='home-animated-logo'>
        <Image className='logo' src={logo} alt='Archivero icono' />
        <h1 id='welcome'>REGISTROS 2021 - 2022</h1>
        <p id='subWelcome'>
          ¿CÓMO IMAGINAS QUE SERÁ CONTADA TU HISTORIA EN EL FUTURO?
        </p>
        <div className='arrowForward'>
          <Link href='/intro/p1'><Image src={arrow} height={48} alt='arrow' /></Link>
        </div>
      </div>
    </section>
  )
}
