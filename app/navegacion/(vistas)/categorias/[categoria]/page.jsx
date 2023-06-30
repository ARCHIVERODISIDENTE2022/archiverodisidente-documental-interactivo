import Image from 'next/image'
import Link from 'next/link.js'
import dataParticipantes from '@/public/data.json'
import styles from '../../participantes/participantes.module.css'
import ModalActoSentido from '@/components/ModalActoSentido'

export default function Categoria ({ params }) {
  const buscarIndiceCategoria = p => p.categoria.findIndex(c => c.nombre === categoria)
  const { categoria } = params

  return (
    <>
      {categoria === 'actosentido' && <ModalActoSentido />}
      <h2 className='titleCategoria'>{categoria.toUpperCase()}</h2>
      <div className={styles.tilesContainer}>
        {dataParticipantes.map(p => (
          <div className='participante' key={p.id}>
            <Link href={`/navegacion/categorias/${categoria}/${p.id}`}>
              <Image className='imagenes-participantes' alt={p.id} width={100} height={100} src={`/${p.categoria[buscarIndiceCategoria(p)].imgObjeto}`} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
