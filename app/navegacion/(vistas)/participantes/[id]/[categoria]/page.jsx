import ModalActoSentido from '@/components/ModalActoSentido'
import dataParticipantes from '../../../../../../public/assets/data.json'

export default function Participante ({ params }) {
  const { id, categoria } = params
  const getCategoryIndex = persona => persona.categoria.findIndex(c => c.nombre === categoria)
  const videoURL = dataParticipantes[id].categoria[getCategoryIndex(dataParticipantes[id])].videoObjeto
  const nombreParticipante = dataParticipantes[id].nombreParticipante
  const ubicacion = dataParticipantes[id].ubicacion

  return (
    <>
      {categoria === 'actosentido' && <ModalActoSentido />}
      <div className='data'>
        <h3 className='informationName'>{nombreParticipante}</h3>
        <h3 className='informationData'>Categoría: {categoria}</h3>
        <h3 className='informationData'>Región: {ubicacion.region}</h3>
        <h3 className='informationData'>Comuna: {ubicacion.comuna}</h3>
      </div>
      <iframe width='420' height='315' src={videoURL} />
    </>
  )
}
