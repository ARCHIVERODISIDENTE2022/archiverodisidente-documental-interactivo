import '@/app/navegacion/(vistas)/CategoriaIndividual.css'
import ModalActoSentido from '@/components/ModalActoSentido'
import dataParticipantes from '@/public/data.json'

export default function Participante ({ params }) {
  const { id, categoria } = params

  const participante = dataParticipantes[id - 1]

  const { nombreParticipante, ubicacion: { region, comuna } } = participante

  const buscarIndiceCategoria = p => p.categoria.findIndex(c => c.nombre === categoria)
  const videoURL = participante.categoria[buscarIndiceCategoria(participante)].videoObjeto

  return (
    <>
      {categoria === 'actosentido' && <ModalActoSentido />}
      <div id='container-individual'>
        <div id='franja-texto'>
          <div id='texto-participante'>
            <h3>{nombreParticipante}</h3>
            <h3>Categoría: <span className='datos'>{categoria}</span></h3>
            <h3>Región: <span className='datos'>{region}</span></h3>
            <h3>Comuna: <span className='datos'>{comuna}</span></h3>
          </div>
        </div>
        <iframe src={videoURL} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
      </div>
    </>
  )
}
