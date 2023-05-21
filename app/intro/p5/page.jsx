import Link from 'next/link.js'
import Image from 'next/image'
import arrowWhite from '../../../assets/icons/arrow-white.svg'

const quotes = [
  {
    id: 1,
    quote: '“Creo que es importante que la gente que pueda contar su historia la cuente, porque hay muchas personas que buscan historias parecidas que intentan ubicarse en algún lugar del mundo.”',
    origin: 'VALENTI, PURRANQUE, X REGIÓN'
  },
  {
    id: 2,
    quote: '“Mi mama tenía unas muñecas y yo se las sacaba po. Pero siempre los chiquillos jugaban a la pelota y a mi no me gustaba, yo era seca pa la cuerda.”',
    origin: 'KATHERINE, QUILLOTA, V REGIÓN.'
  },
  {
    id: 3,
    quote: '“El miedo queda contigo, una aprende a abrazarse, a darse calma decirte ya, sea lo que sea que te haya dado miedo en un momento de la vida que no te achique, que no te haga sentir menos que el miedo no sea más grande que tu.”',
    origin: 'TURQUESA LILA MENTOLADA, ILLAPEL, IV REGIÓN.'
  }
]

export default function p5 () {
  return (
    <div className='intro intro-black'>
      <div className='quotes'>
        {quotes.map(q => (
          <div key={q.id}>
            <p className='quote'>{q.quote}</p>
            <p>{q.origin}</p>
          </div>
        ))}
      </div>
      <div className='arrowForward'>
        <Link href='/instrucciones'><Image src={arrowWhite} height={48} alt='arrow' /></Link>
      </div>
    </div>
  )
}
