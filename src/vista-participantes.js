const vistaParticipante = () => {
    const templateVistaParticipante = `
    <main class= 'vistaParticipante'>
        <h1>PARTICIPANTES</h1>
        <img class="back-arrow" src="img/flecha .png" alt="back-arrow" href="">
        <button class='link-participante'>IMAGEN PARTICIPANTE</button>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>`;
    const vistaParticpanteContainer = document.createElement('div');
    vistaParticpanteContainer.className = 'vistaParticipante-container';
    vistaParticpanteContainer.innerHTML = templateVistaParticipante;
}

export default vistaParticipante;