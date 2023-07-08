import { Footer } from '../../../components/Footer'
import './Vistas.css'
import FlechaAtras from '@/components/FlechaAtras'

export default function VistasLayout ({ children }) {
  return (
    <section className='container'>
      <div className='colContainer'>
        {children}
      </div>
      <div className='flechasInicio'>
        <FlechaAtras />
      </div>
      <Footer />
    </section>
  )
}
