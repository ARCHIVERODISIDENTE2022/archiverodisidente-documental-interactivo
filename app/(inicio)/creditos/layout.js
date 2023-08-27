import './creditos.css'
import '@/app/navegacion/(vistas)/Vistas.css'
import FlechaAtras from '@/components/FlechaAtras'
import { Footer } from '@/components/Footer'

export default function CreditosLayout ({ children }) {
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
