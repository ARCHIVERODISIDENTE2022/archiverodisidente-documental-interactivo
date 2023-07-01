import Image from 'next/image'
import Link from 'next/link.js'
import Logo from '@/assets/logos/instrucciones.png'
import './instrucciones.css'

export default function Instrucciones () {
  return (
    <section id='instrucciones'>
      <Image src={Logo} height={160} alt='logo-archivero-disidente' id='instrucciones-logo' />
      <div>
        <h1>INSTRUCCIONES</h1>
        <p className='instrucciones-text'>Archivero Disidente es un documental interactivo que narra acerca de los <b>procesos identitarios de personas de las disidencias sexuales en Chile; un registro participativo de su archivo en vida.</b></p>
        <p className='instrucciones-text'>Tienes dos formas de navegar por el contenido: <b>Por participantes o por categorías. </b>Recuerda que <b>puedes desplazarte hacia adelante o atrás con las flechas.</b></p>
        <p className='instrucciones-text'><b>Y tranquilx,</b> siempre puedes guiarte por el menú que se encontrará en la parte inferior de la pantalla.</p>
        <p className='instrucciones-text'><i>Algunos testimonios en este sitio web pueden tener contenido sensible.</i></p>
      </div>
      <div id='btnComenzar'>
        <Link id='btnComenzarLink' href='/navegacion'>Comenzar el viaje</Link>
      </div>
    </section>
  )
}
