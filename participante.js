const participante = () => {
    const templateParticipante = `
    <main class= 'participante'>
        <h1>${participante}</h1>
        <img class="back-arrow" src="img/flecha.png" alt="back-arrow" href="">
        <button class='categoria.id'>${categoria.id}</button>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>`;
    const participanteContainer = document.createElement('div');
    participanteContainer.className = 'participante-container';
    participanteContainer.innerHTML = templateParticipante;
}

export default participante;