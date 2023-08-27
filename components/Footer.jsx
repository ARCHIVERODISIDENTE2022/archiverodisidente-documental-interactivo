import Link from 'next/link.js'
import './Footer.css'
import clickSFX from '@/src/clickSFX'
import AudioPlayer from './AudioPlayer'

export function Footer ({ categoria }) {
  return (
    <footer className='footer'>
      <Link onClick={clickSFX} href='/' id='backHome'>INICIO</Link>
      <Link onClick={clickSFX} href='/navegacion' id='toNavegacion'>NAVEGACIÓN</Link>
      <Link onClick={clickSFX} href='/creditos' id='toCreditos'>CRÉDITOS</Link>
      {categoria !== undefined && <AudioPlayer src={`/audio/${categoria}.mp3`} />}
    </footer>
  )
}
