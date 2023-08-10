import FlechaAdelante from '@/components/FlechaAdelante'

const p2 = () => {
  const paginaSiguiente = '/intro/p3'
  
  return (
    <section className='column-section'>
      <div className='texto-intro-container'>
        <p className='textoIntro'>Nos muestran otros  <b>paisajes y vivencias</b></p>
      </div>
      <FlechaAdelante href={paginaSiguiente} color='black' />
    </section>
  )
}

export default p2
