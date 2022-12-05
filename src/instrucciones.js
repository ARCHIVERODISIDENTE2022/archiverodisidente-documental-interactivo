const instrucciones = () => {
    const templateInstrucciones = `
    <main class= 'instrucciones'>
        <img class= 'archivero' src='img/archiveroicono.png' alt='Archivero'></img>
            <h1>INSTRUCCIONES</h1>
            <h2>“Archivero Disidente es un documental interactivo que posee dos formas para navegar por los contenidos. Puedes comenzar por lxs participantes o por las categorías. Recuerda que con las flechas puedes desplazarte hacia adelante o atrás. Y tranquilx, siempre puedes guiarte por el menú que se encontrará en la parte inferior de la pantalla, ahí también encontrarás distintas configuraciones para hacer de este viaje, un experiencia significativa”. </h2>
        <button class='viaje'>COMENZAR EL VIAJE</button>
    </main>`;
    const instruccionesContainer = document.createElement('div');
    instruccionesContainer.className = 'instrucciones-container';
    instruccionesContainer.innerHTML = templateInstrucciones;
}

export default instrucciones;