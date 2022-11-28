const navegar = () => {
    const templateNavegar = `
    <main class= 'navegar'>
        <h1>Elige la forma en la que deseas navegar</h1>
        <button class='participantes'>Participantes</button>
        <button class='categorias'>Categorías</button>
    </main>`;
    const navegarContainer = document.createElement('div');
    navegarContainer.className = 'navegar-container';
    navegarContainer.innerHTML = templateNavegar;
}

export default navegar;