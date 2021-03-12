const inputContent = document.querySelector('#profile');

inputContent.addEventListener('click', (e) => {
    e.preventDefault();
    const templateContent = `
    <header>
    <div class="container">
        <h2 class="logo">NETFLIX</h2>
        <nav>
            <a href="/#">Inicio</a>
            <a href="/#series">Séries</a>
            <a href="/#filmes">Filmes</a>
            <a href="/#documentarios">Documentários</a>
        </nav>
    </div>
</header>
<main>
<div class="filme-principal">
    <div class="container">
        <h3 class="titulo">HOUSE OF CARDS</h3>
        <p class="descricao">Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível.</p>
        <div class="botoes">
            <button role="button" class="botao">
                <i class="fas fa-play"></i>
                ASSISTIR AGORA
            </button>
            <button role="button" class="botao">
                <i class="fas fa-info-circle"></i>
                MAIS INFORMAÇÕES
            </button>
        </div>
    </div>
</div>
</main>

<div class="carrosel-filmes">
    <div class="owl-carousel owl-theme">
        <div class="item">
            <img class="box-filme" src="assets/mini1.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini2.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini3.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini4.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini5.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini6.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini7.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini8.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini9.jpg" alt="" srcset="">
        </div>
        <div class="item">
            <img class="box-filme" src="assets/mini10.jpg" alt="" srcset="">
        </div>
    </div>
</div>
    `;
    // homeContainer.innerHTML = templateHome;
    document.getElementById('root').innerHTML = templateContent;
});
window.addEventListener("load", getLives);
