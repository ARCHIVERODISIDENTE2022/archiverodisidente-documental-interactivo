const retribucion = () => {
    const templateRetribucion = `
    <main class= 'retribucion'>
        <h1>RETRIBUCCIÓN</h1>
        <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem.</h2>
        <button class='link-retibucion'>www.todomejora.org</button>
        <div class='link-descripcion'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>
        <footer>
            <button>FORMA DE NAVEGACIÓN</button>
            <button>RETRIBUCCIÓN</button>
            <button>CRÉDITOS</button>
        </footer>
    </main>`;
    const retribucionContainer = document.createElement('div');
    retribucionContainer.className = 'retribucion-container';
    retribucionContainer.innerHTML = templateRetribucion;
}

export default retribucion;