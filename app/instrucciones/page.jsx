import Image from 'next/image'
import Link from 'next/link.js'
import Logo from '@/assets/logo_instrucciones.png'
import './Instrucciones.css'

export default function Instrucciones () {
  return (
    <section id='instrucciones'>
      <Image src={Logo} height={160} alt='logo-archivero-disidente' />
      <h1>Instrucciones</h1>
      <p className='instrucciones-text'>“Archivero Disidente es un documental interactivo que narra acerca de los procesos identitarios de 14 personas de las disidencias sexuales en Chile; un registro participativo de su archivo en vida.</p>
      <p className='instrucciones-text'>Tienes dos formas de navegar por el contenido:por participantes o por categorías.Recuerda que puedes desplazarte hacia adelante o atrás con las flechas. Y tranquilx, siempre puedes guiarte por el menú que se encontrará en la parte inferior de la pantalla.</p>
      <button><Link href='/navegacion' style={{ color: 'black' }}>Comenzar el viaje</Link></button>
    </section>
  )
}
