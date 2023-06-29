import './creditos.css'
import logo_udp from '@/assets/logos/laboratorio_digital_udp.png'
import logo_mincap from '@/assets/logos/mincap.png'
import logo_documentasur from '@/assets/logos/documenta_sur.png'
import logo_docsvalparaiso from '@/assets/logos/docs_valparaiso.jpg'
import Image from 'next/image'
import FlechaAtras from '@/components/FlechaAtras'

export default function Creditos () {
  return (
    <>
      <FlechaAtras />
      <p id='creditos'>CRÉDITOS ARCHIVERO DISIDENTE 2020 – 2023


      DIRECCIÓN CONTENIDOS
      Luka Montecinos

      DIRECCIÓN AUDIOVISUAL 
      Mariana Barahona

      PRODUCCIÓN EJECUTIVA
      Carolina Zúñiga

      PRODUCCIÓN PERIODÍSTICA E INVESTIGACIÓN
      Ignacio Aguirre
      María Ignacia Santos

      MONTAJE
      Mariana Barahona
      Luka Montecinos
      Javier Bascuñán
      Ignacio Velásquez

      COMPOSICIÓN Y MÚSICA ORIGINAL
      Loreto Ríos

      DIRECCIÓN PROGRAMACIÓN WEB
      Zota Pianola

      EQUIPO DESARROLLO WEB
      Natalia Flores
      Constanza Leyton
      Ianka Ferrada

      ASESORÍA UX Y DESARROLLO WEB
      Zota Pianola
      Natalia Flores
      Gabriel Galindo

      PARTICIPANTES
      Catalina López
      Florencia Chelme
      Gael Negrón
      Gonzalo Fonseca
      Katherine Guzmán
      Maco
      Manuel Vidal
      Melanie Díaz
      Turquesa Lila Mentolada
      Valénti Erregui
      Violeta Addams
      Venus Eros
      Yoko Riquelme

      POSTULACIÓN FONDO AUDIOVISUAL 2020
      Carolina Zúñiga
      Luka Montecinos
      María Ignacia Santos
      Mariana Barahona
      Camila Montecinos

      DIFUSIÓN Y REDES SOCIALES
      Ignacia Pezoa
      Maite Agurto
      Valentina Mella
      Isidora Rojas
      Ignacio Torres

      TRANSCRIPCIONES
      Renata Landerer
      Thiare Riquelme
      Diego Acuña
      Andrés Infante

      CONTABILIDAD
      Nélida Alarcón
      Zulema Alarcón
      Nayadet Rodríguez

      *** 

      COLABORACIONES Y ASESORÍAS

      Fundación Todo Mejora
      Matías Trujillo
      Fefi Barriga

      Centro Espacio Seguro
      Marcela Márquez

      Departamento de Género UDP
      Nicole Murillo

      Laboratoria
      Merly Blanco
      Mijal Brunman

      Música Edición Videos
      Free Sound - www.freesound.org
      Pueblo Nuevo -www.pueblonuevo.cl
      Mono o Estéreo
      nohumano
      Cristóbal Alzérreca/dilunar

      Documenta Sur
      Magdalena Ponce
      Amara Micaela
      Alexia Lorca
      Alejandra Rosas

      Taller de Archivo Comunitario FECH

      Ataka Coletiva

      *** 

      AGRADECIMIENTOS

      Claudio Montecinos
      Macarena Fernández
      Paula Sáenz-Laguna
      Paz Urrutia
      Carolina Gainza
      Francisca Skoknic
      Mónica Maureira
      Arnau Grifeu Castell
      María Ignacia Court
      Camila Pantoja
      José Mogrol
      Galatea Jorquera
      Paulina Toro

      Facultad de Comunicación y Letras UDP
      Marcela Aguilar
      Gazi Jalil
      Viviana Flores
      Mónica Humeres
      Mónica González
      Isabel Tagle
      Daniel Rodríguez
      Cristián Peralta
      Danitza Becerra
      Luis Catalán
      Pedro Benavente
      Alexander Jiménez

      Rodaje Región de Coquimbo
      Fundación Así Somos
      Florencia Chelme

      Juan Pablo Álvares
      Anita Aratto
      Emma Castañeda
      Vianni Tapia

      Oficina de Diversidades de La Serena

      Rodaje Región de Valparaíso
      Oficina Diversidad Quillota
      Cris Salazar


      Circo Tony Caluga
      Abraham Lillo

      Oficina de las Diversidades Valparaíso

      Rodaje Región de Ñuble
      Teresa Ruiz

      Rayén Castro
      Martina Villalobos
      Sophie Rose


      Rodaje Región de Los Ríos
      Identidad Chile
      Patricio Cuevas

      Teatro Municipal Purranque
      Gonzalo Tejer

      Rodaje Región de Los Lagos
      Casa Teatro Puerto Montt

      Rodaje Región de Aysén
      Diversa Patagonia
      Nicole Farías


      Neutres Chile
      OTR Chile
      Valdiversa Chile
      Todes
      LGBT+LIBRE
      Diversas
      RRA Chile

      ***
      </p>
      <code>*Proyecto financiado por el Fondo de Fomento Audiovisual, Convocatoria 2021 del Ministerio las Culturas, las Artes y el Patrimonio*
      *Proyecto desarrollado por equipo asociado al Laboratorio Digital de la Facultad de Comunicación y Letras de la Universidad Diego Portales, Santiago, Chile*
      *Taller de desarrollo de proyectos de realidad extendida - Docs Valparaíso 2020*
      *Participación Talleres Documenta Sur - 2022-2023*</code>
      <div id='logos'>
        <Image src={logo_mincap} height='80' alt='logo-mincap' />
        <Image src={logo_udp} height='80' alt='logo-laboratorio-digital-udp' />
        <Image src={logo_documentasur} height='80' alt='logo-documenta-sur' />
        <Image src={logo_docsvalparaiso} height='80' alt='logo-docs-valparaiso' />
      </div>
    </>
  )
}
