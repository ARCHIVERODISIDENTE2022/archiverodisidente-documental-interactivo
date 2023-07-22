import Link from 'next/link.js'
import './Footer.css'
import clickSFX from '@/src/clickSFX'

export function Footer () {
  return (
    <footer className='footer'>
      <Link onClick={clickSFX} href='/' id='backHome'>INICIO</Link>
      <Link onClick={clickSFX} href='/navegacion' id='toNavegacion'>NAVEGACIÓN</Link>
      <Link onClick={clickSFX} href='/creditos' id='toCreditos'>CRÉDITOS</Link>
    </footer>
  )
}
