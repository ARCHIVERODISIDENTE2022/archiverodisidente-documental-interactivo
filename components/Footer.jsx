import Link from 'next/link.js'
import './Footer.css'

export function Footer () {
  return (
    <footer className='footer'>
      <Link href='/' id='backHome'>INICIO</Link>
      <Link href='/navegacion' id='toNavegacion'>NAVEGACIÓN</Link>
      <Link href='/retribucion' id='toRetribucion'>RETRIBUCIÓN</Link>
      <Link href='/creditos' id='toCreditos'>CRÉDITOS</Link>
    </footer>
  )
}
