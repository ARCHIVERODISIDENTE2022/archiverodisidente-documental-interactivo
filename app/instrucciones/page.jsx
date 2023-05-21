import Link from 'next/link.js'

export default function Instrucciones () {
  return (
    <>
      <p>“Archivero Disidente es un documental interactivo que narra acerca de los procesos identitarios de 14 personas de las disidencias sexuales en Chile; un registro participativo de su archivo en vida.
        Tienes dos formas de navegar por el contenido:por participantes o por categorías.Recuerda que puedes desplazarte hacia adelante o atrás con las flechas. Y tranquilx, siempre puedes guiarte por el menú que se encontrará en la parte inferior de la pantalla.</p>
      <button><Link href='/navegacion' style={{ color: 'black' }}>Navegación</Link></button>
    </>
  )
}
