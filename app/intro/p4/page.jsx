import FlechaAdelante from '@/components/FlechaAdelante'

const p4 = () => {
  const paginaSiguiente = '/intro/p5'
  
  return (
    <section className='column-section'>
      <div className='texto-intro-container'>
        <p className='textoIntro'>Te invitamos a este viaje, en el cual <b>no estás solx._</b></p>
      </div>
      <FlechaAdelante href={paginaSiguiente} color='black' />
    </section>
  )
}

export default p4
