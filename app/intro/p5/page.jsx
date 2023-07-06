import Link from 'next/link.js'
import FlechaBlancaAdelante from '@/components/FlechaBlancaAdelante'

const quotes = [
  {
    id: 1,
    quote: '“Creo que es importante que la gente que pueda contar su historia la cuente, porque hay muchas personas que buscan historias parecidas, que intentan ubicarse en algún lugar del mundo.”',
    origin: 'VALÉNTI, PURRANQUE, REGIÓN DE LOS LAGOS'
  },
  {
    id: 2,
    quote: '"He tenido que luchar por permanecer y hacer valer mi identidad de género frente a las situaciones o lugares donde habitualmente voy"',
    origin: 'YOKO, CHILLÁN, REGIÓN DE ÑUBLE'
  },
  {
    id: 3,
    quote: `“El miedo queda contigo, una aprende a abrazarse, a darse calma, a decirte: 'Ya, sea lo que sea que te haya dado miedo en un momento de la vida que no te achique, que no te haga sentir menos, que el miedo no sea más grande que tú'.”`, // eslint-disable-line
    origin: 'TURQUESA, ILLAPEL, REGIÓN DE COQUIMBO'
  }
]

export default function p5 () {
  return (
    <section className='column-section black-background'>
      <div className='texto-intro-container'>
        {quotes.map(q => (
        <div key={q.id}>
          <p className='quote'>{q.quote}</p>
          <p className='quote'>{q.origin}</p>
        </div>
        ))}
      </div>
      <div className='flechasInicio'>
          <Link href='/instrucciones'><FlechaBlancaAdelante /></Link>
        </div>
    </section>
  )
}
