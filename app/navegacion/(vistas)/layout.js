import { Footer } from '../../../components/Footer'
import './Vistas.css'

export default function VistasLayout ({ children }) {
  return (
    <section>
      <div className='container'>
        <div id='containerVistaCategoria'>
          <div className='colContainer'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
