import Image from 'next/image'
import Link from 'next/link.js'
import dataParticipantes from '../../../../../public/assets/data.json'
import styles from '../../participantes/participantes.module.css'
import ModalActoSentido from '@/components/ModalActoSentido'

export default function Categoria ({ params }) {
  const getCategoryIndex = persona => persona.categoria.findIndex(c => c.nombre === categoria)
  const { categoria } = params

  return (
    <>
      {categoria === 'actosentido' && <ModalActoSentido />}
      <div className='titleCategoria'><h2>{categoria.toUpperCase()}</h2></div>
      <div className='colContainer'>
        <div className={styles.tilesContainer}>
          {dataParticipantes.map(p => (
            <div className='participante' key={p.id}>
              <Link href={`/navegacion/categorias/${categoria}/${p.id}`}>
                <Image alt={p.id} width={100} height={100} src={`/${p.categoria[getCategoryIndex(p)].imgObjeto}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
