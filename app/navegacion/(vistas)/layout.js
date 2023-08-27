'use client'

import { Footer } from '../../../components/Footer'
import './Vistas.css'
import FlechaAtras from '@/components/FlechaAtras'
import { useParams } from 'next/navigation'

const VistasLayout = ({ children }) => {
  const params = useParams()
  const categoria = params.categoria
  return (
    <section className='container'>
      <div className='colContainer'>
        {children}
      </div>
      <div className='flechasInicio'>
        <FlechaAtras />
      </div>
      <Footer categoria={categoria} />
    </section>
  )
}

export default VistasLayout
