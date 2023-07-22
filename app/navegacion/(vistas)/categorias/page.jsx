import Link from 'next/link.js'
import styles from './categoria.module.css'
import clickSFX from '@/src/clickSFX'

export default function Categorias () {
  const categorias = ['familia', 'miedo', 'amor', 'actosentido', 'cuerpo', 'libertad']

  return (
    <>
      <h2 className='titleCategoria'>CATEGORÍAS</h2>
      <div id='contenido-categoria'>
        <div className={styles.row}>
          {categorias.map(nombre => (
            <Link onClick={clickSFX} key={nombre} href={`/navegacion/categorias/${nombre}`} className='ctgr'>{nombre.toUpperCase()}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
