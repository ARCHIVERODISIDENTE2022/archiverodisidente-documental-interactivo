import Link from 'next/link.js'
import './navegacion.css'
import clickSFX from '@/src/clickSFX'

export default function Navegacion () {
  return (
    <div className='navigation'>
      <h1 id='navigationText'>ELIGE LA FORMA EN LA QUE DESEAS NAVEGAR</h1>
      <div id='btnNavigation'>
        <Link onClick={clickSFX} href='/navegacion/participantes' className='btnLink' id='navigationParticipantes'>PARTICIPANTES</Link>
        <Link onClick={clickSFX} href='/navegacion/categorias' className='btnLink' id='navigationCategorias'>CATEGORÍAS</Link>
      </div>
    </div>
  )
}
