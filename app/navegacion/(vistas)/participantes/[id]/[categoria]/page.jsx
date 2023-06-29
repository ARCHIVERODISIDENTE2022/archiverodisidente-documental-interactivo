import ModalActoSentido from '@/components/ModalActoSentido'
import dataParticipantes from '../../../../../../public/assets/data.json'

export default function Participante ({ params }) {
  const { id, categoria } = params

  const participante = dataParticipantes[id-1]

  const { nombreParticipante, ubicacion: {region, comuna}} = participante

  const buscarIndiceCategoria = p => p.categoria.findIndex(c => c.nombre === categoria)
  const videoURL = participante.categoria[buscarIndiceCategoria(participante)].videoObjeto


  return (
    <>
      {categoria === 'actosentido' && <ModalActoSentido />}
      <div className='data'>
        <h3 className='informationName'>{nombreParticipante}</h3>
        <h3 className='informationData'>Categoría: {categoria}</h3>
        <h3 className='informationData'>Región: {region}</h3>
        <h3 className='informationData'>Comuna: {comuna}</h3>
      </div>
      <iframe src={videoURL} />
    </>
  )
}
