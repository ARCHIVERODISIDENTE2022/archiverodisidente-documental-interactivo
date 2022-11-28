const categorias = () => {
    const templateCategorias = `
    <main class= 'categorias'>
        <h1>${categoria}</h1>
        <img class="back-arrow" src="img/flecha.png" alt="back-arrow" href="">
        <button class='participante.id'>${participante.id}</button>
        <button class='participante.id'>${participante.id}</button>
        <button class='participante.id'>${participante.id}</button>
        <button class='participante.id'>${participante.id}</button>
        <button class='participante.id'>${participante.id}</button>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>`;
    const categoriasContainer = document.createElement('div');
    categoriasContainer.className = 'categoria-container';
    categoriasContainer.innerHTML = templateCategorias;
}

export default categorias;