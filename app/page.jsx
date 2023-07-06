import Link from 'next/link.js'
import Image from 'next/image'
import logo from '../assets/gif/logo_inicial.gif'
import './Home.css'
import FlechaAdelante from '@/components/FlechaAdelante'

export default function Home () {
  return (
    <section className='column-section'>
      <div id='home-animated-logo'>
        <Image className='logo' src={logo} alt='Archivero icono' />
        <h1 id='welcome'>REGISTROS 2021 - 2022</h1>
        <p id='subWelcome'>
          ¿CÓMO IMAGINAS QUE SERÁ CONTADA TU HISTORIA EN EL FUTURO?
        </p>
      </div>
      <div className='flechasInicio'>
          <Link rel='icon' href='/intro/p1'><FlechaAdelante /></Link>
        </div>
    </section>
  )
}
