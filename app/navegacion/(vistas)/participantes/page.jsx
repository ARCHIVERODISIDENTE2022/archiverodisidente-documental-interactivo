import Image from 'next/image'
import Link from 'next/link.js'
import dataParticipantes from '@/public/data.json'
import styles from './participantes.module.css'

export default function Participantes () {
  return (
    <>
      <h2 className='titleCategoria'>PARTICIPANTES</h2>
      <div className={styles.tilesContainer}>
        {dataParticipantes.map(p => (
          <div className='participante' key={p.id}>
            <Link href={`/navegacion/participantes/${p.id}`}>
              <Image className='imagenes-participantes' alt={p.id} width={100} height={100} src={`/${p.imagenPerfil}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
