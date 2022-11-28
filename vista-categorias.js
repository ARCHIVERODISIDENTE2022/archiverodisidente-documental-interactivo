const vistaCategorias = () => {
    const templateVistaCategorias = `
    <main class= ''>
        <h1>CATEGORÍAS</h1>
        <img class="back-arrow" src="img/flecha.png" alt="back-arrow" href="">
        <button class='familia'>FAMILIA</button>
        <button class='amor'>AMOR</button>
        <button class='cuerpo'>CUERPO</button>
        <button class='miedo'>MIEDO</button>
        <button class='actosentido'>ACTOSENTIDO</button>
        <button class='libertad'>LIBERTAD</button>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>`;
    const vistaCategoriasContainer = document.createElement('div');
    vistaCategoriasContainer.className = '-container';
    vistaCategoriasContainer.innerHTML = templateVistaCategorias;
}

export default vistaCategorias;