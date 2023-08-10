import FlechaAdelante from '@/components/FlechaAdelante'

const p1 = () => {
  const paginaSiguiente = '/intro/p2'
  
  return (
    <section className='column-section'>
      <div className='texto-intro-container'>
        <p className='textoIntro'>Los viajes nos desplazan, nos mueven de un lugar a otro, <b>nos movilizan</b></p>
      </div>
      <FlechaAdelante href={paginaSiguiente} color='black' />
    </section>
  )
}

export default p1