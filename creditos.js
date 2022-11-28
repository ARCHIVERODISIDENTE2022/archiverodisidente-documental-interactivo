const creditos = () => {
    const templateCreditos = `
    <main class= 'creditos'>
        <h1>CRÉDITOS</h1>
        <div class= 'video-creditos'></div>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>`;
    const creditosContainer = document.createElement('div');
    creditosContainer.className = 'creditos-container';
    creditosContainer.innerHTML = templateCreditos;
}

export default creditos;