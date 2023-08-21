import FlechaAdelante from '@/components/FlechaAdelante'

const p3 = () => {
  const paginaSiguiente = '/intro/p4'

  return (
    <section className='column-section black-background'>
      <div className='texto-intro-container'>
        <p id='nosCambian'><b>Nos cambian_</b></p>
      </div>
      <FlechaAdelante href={paginaSiguiente} color='white' />
    </section>
  )
}

export default p3
