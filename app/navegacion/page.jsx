import Link from 'next/link.js'
import './navegacion.css'

export default function Navegacion () {
  return (
    <div className='navigation'>
      <h1 id='navigationText'>ELIGE LA FORMA EN LA QUE DESEAS NAVEGAR</h1>
      <div className='btnNavigation'>
        <Link href='/navegacion/participantes' className='btnLink' id='navigationParticipantes'>PARTICIPANTES</Link>
        <Link href='/navegacion/categorias' className='btnLink' id='navigationCategorias'>CATEGORÍAS</Link>
      </div>
    </div>
  )
}
