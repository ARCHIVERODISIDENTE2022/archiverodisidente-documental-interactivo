import Link from 'next/link.js'
import styles from './categoria.module.css'

export default function Categorias () {
  const categorias = ['familia', 'miedo', 'amor', 'actosentido', 'cuerpo', 'libertad']

  return (
    <>
      <div className='titleCategoria'><h2>CATEGORÍAS</h2></div>
      <div className='colContainer'>
        <div className={styles.row}>
          {categorias.map(nombre => (
            <Link key={nombre} href={`/navegacion/categorias/${nombre}`} className='ctgr'>{nombre.toUpperCase()}</Link>
          ))}
        </div>
      </div>
    </>
  )
}
