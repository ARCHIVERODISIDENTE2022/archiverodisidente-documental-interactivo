import Image from 'next/image'
import logo from '@/assets/gif/logo_inicial.gif'
import './Home.css'
import FlechaAdelante from '@/components/FlechaAdelante'

const Home = () => {
  const paginaSiguiente = '/intro/p1'

  return (
    <section className='column-section'>
      <div id='home-animated-logo'>
        <Image priority={true} className='logo' src={logo} alt='Archivero icono' />
        <h1 id='welcome'>REGISTROS 2021 - 2022</h1>
        <p id='subWelcome'>
          ¿CÓMO IMAGINAS QUE SERÁ CONTADA TU HISTORIA EN EL FUTURO?
        </p>
      </div>
      <FlechaAdelante href={paginaSiguiente} color='black' />
    </section>
  )
}

export default Home
