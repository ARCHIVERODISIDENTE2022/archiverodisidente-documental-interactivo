import Image from 'next/image'
import Link from 'next/link.js'
import dataParticipantes from '../../../../public/assets/data.json'
import styles from './participantes.module.css'

export default async function Participantes () {
  return (
    <>
      <div className='titleCategoria'><h2>PARTICIPANTES</h2></div>
      <div className='colContainer'>
        <div className={styles.tilesContainer}>
          {dataParticipantes.map(p => (
            <div key={p.id}>
              <Link href={`/navegacion/participantes/${p.id}`}>
                <Image className='imagenes-participantes' alt={p.id} width={100} height={100} src={`/${p.imagenPerfil}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
