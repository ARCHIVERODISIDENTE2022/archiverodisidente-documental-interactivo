import Link from 'next/link.js'
import dataParticipantes from '@/public/data.json'
import styles from '../../categorias/categoria.module.css'

export default function Persona ({ params }) {
  const { id } = params

  const participante = dataParticipantes[id - 1]

  const { cuna, nombreParticipante, videoPresentacion } = participante

  const categorias = ['familia', 'miedo', 'amor', 'actosentido', 'cuerpo', 'libertad']

  return (
    <>
      <div id='cuna'><p>{`"${cuna}"`}</p></div>
      <div id='contenedor-grupo-iframe'>
        <div id='contenedor-nombre-participante'>
          <h1 id='nombre-participante'>{nombreParticipante}</h1>
        </div>
        <iframe id='iframe-participante' src={videoPresentacion} />
      </div>
      <div>
        <div className={styles.row}>
          {categorias.map(nombre => (
            <Link key={nombre} href={`/navegacion/participantes/${id}/${nombre}`} className='ctgr'>{nombre.toUpperCase()}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
