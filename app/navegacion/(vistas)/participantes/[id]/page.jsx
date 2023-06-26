import Link from 'next/link.js'
import dataParticipantes from '../../../../../public/assets/data.json'
import styles from '../../categorias/categoria.module.css'

export default function Persona ({ params }) {
  const { id } = params
  const categorias = ['familia', 'miedo', 'amor', 'actosentido', 'cuerpo', 'libertad']

  return (
    <>
      <p>{`"${dataParticipantes[id].cuna}"`}</p>
      <h1>{dataParticipantes[id].nombreParticipante}</h1>
      <iframe width='420' height='315' src={dataParticipantes[id].presentacion} />
      <div className='colContainer'>
        <div className={styles.row}>
          {categorias.map(nombre => (
            <Link key={nombre} href={`/navegacion/participantes/${id}/${nombre}`} className='ctgr'>{nombre.toUpperCase()}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
