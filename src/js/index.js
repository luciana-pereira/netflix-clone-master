const template = () => {
 
    document.getElementById('root').innerHTML = `
    <h4 class="alert">Atenção! Esta não é uma página oficial da Netflix.</h4>
        <header class="showcase">
            <div class="showcase-top">
                <img src="./assets/logo-netflix.png" alt="Netflix Logo" />
                <button  class="btn-action btn-home btn-rounded">Entrar</button>
            </div>

            <div class="showcase-content">
                <h1>Filmes, séries e muito mais. Sem limites.</h1>
                <h2>Assista onde quiser. Cancele quando quiser.</h2>
                <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                <div class="input">
                    <input type="email" name="email" placeholder="Email"/>
                    <button class="btn-action btn-rounded btn-h btn-red btn-lg btn-home">Vamos lá ></button>
                </div>
            </div>
        </header>

        <section>
            <div class="story-card-animation">
                <div class="animation-card-container">
                    <div class="card-text">
                        <h1 class="card-title">Aproveite na TV.</h1>
                        <h2 class="card-sub-title">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h2>
                    </div>
                    <div class="card-img-container">
                        <div class="card-animation-container">
                            <img class="card-img"src="./assets/tv.png" alt="Netflix TV"/>
                            <div class="card-animation">
                                <video class="video-1" autoplay="" playsinline="" muted="" loop="">
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="story-card-animation">
                <div class="animation-card-container">
                    <div class="card-img-container">
                        <div class="card-animation-container">
                            <img class="card-img"src="./assets/3.jpg" alt="Netflix TV"/>
                        </div>
                    </div>
                    <div class="card-text">
                        <h1 class="card-title">Baixe séries para assistir offline.</h1>
                        <h2 class="card-sub-title">Salve seus títulos e sempre tenha algo para assistir.</h2>
                    </div>
                </div>
            </div>

            <div class="story-card-animation">
                <div class="animation-card-container">
                    <div class="card-text">
                        <h1 class="card-title">Assista quando quiser.</h1>
                        <h2 class="card-sub-title">Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h2>
                    </div>
                    <div class="card-img-container">
                        <div class="card-animation-container">
                            <img class="card-img-device"src="./assets/device-pile.png" alt="Netflix TV"/>
                            <div class="card-animation">
                                <video class="video-2" autoplay="" playsinline="" muted="" loop="">
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="story-card-animation">
                <div class="animation-card-container">
                    <div class="card-img-container">
                        <div class="card-animation-container">
                            <img class="card-img"src="./assets/home-infantil.png" alt="Netflix TV"/>
                        </div>
                    </div>
                    <div class="card-text">
                        <h1 class="card-title">Crie perfis para crianças.</h1>
                        <h2 class="card-sub-title">Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</h2>
                    </div>
                </div>
            </div>
        </section>

        <section class="story-card our-story-card faq-card">
            <div class="story-card-text">
                <h1 class="story-card-title">Perguntas frequentes</h1>
                <ul class="faq-list">
                    <li class="faq-list-item">
                        <button class="faq-question">
                            O que é Netflix?
                            <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
                                </path>
                            </svg>
                        </button>
                    </li>
                    <li class="faq-list-item">
                        <button class="faq-question">
                            Quanto custa a Netflix?
                            <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
                                </path>
                            </svg>
                        </button>
                    </li>
                    <li class="faq-list-item">
                        <button class="faq-question">
                            Onde posso assistir?
                            <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
                                </path>
                            </svg>
                        </button>
                    </li>
                    <li class="faq-list-item">
                        <button class="faq-question">
                            Como faço para cancelar?
                            <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
                                </path>
                            </svg>
                        </button>
                    </li>
                    <li class="faq-list-item">
                        <button class="faq-question">
                            O que eu posso assistir na Netflix?
                            <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
                                </path>
                            </svg>
                        </button>
                    </li>
                    <li class="faq-list-item">
                        <button class="faq-question">
                            A Netflix é adequada para crianças?
                            <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
                                </path>
                            </svg>
                        </button>
                    </li>
                </ul>
                <p class="email-title">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <div class="showcase-content">
                    <div class="input">
                        <input type="email" name="email" placeholder="Email"/>
                        <button class="btn-action btn-rounded btn-h btn-red btn-lg btn-home">Vamos lá ></button>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer our-story-card card-contents footer-card our-story-card-no-border">
            <div class="footer-cols site-footer-wrapper centered dark">
                <div class="site-footer">
                    <p class="footer-top">Dúvidas? Ligue <a class="footer-top-a" href="tel:0800-761-4631">0800-761-4631</a></p>
                    <ul class="footer-links structural">
                        <li class="footer-link-item"><a class="footer-link-a">Perguntas frequentes</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Centro de ajuda</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Conta</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Imprensa</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Relações com investidores</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Carreiras</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Resgatar cartão pré-pago</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Comprar cartão pré-pago</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Formas de assistir</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Termos de uso</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Privacidade</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Preferências de cookies</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Informações corporativas</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Entre em contato</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Teste de velocidade</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Avisos legais</a></li>
                        <li class="footer-link-item"><a class="footer-link-a">Só na Netflix</a></li>
                    </ul>
                </div>
                <h4 class="alert">Atenção! Esta não é uma página oficial da Netflix.</h4>
            </div>
        </footer>
    `;

    const btnProfile = document.querySelectorAll("button.btn-action");
    for(let i = 0; i < btnProfile.length; i++) {
    btnProfile[i].addEventListener('click', () => { 
        document.getElementById('root').innerHTML = `
        <div id="appMountPoint">
            <div class="netflix-sans-fount-loaded">
                <div>
                    <div class="bd dark-backgroud">
                        <div class="profiles-gate-container">
                            <header>
                                <div class="showcase-top">
                                    <img src="./assets/logo-netflix.png" alt="Netflix Logo" />
                                </div>
                            </header>
                            <div class="centered-div list-profiles-container">
                                <h1 class="profile-gate-label">Quem está assistindo?</h1>
                                <div class="list-profiles">
                                    <ul class="choose-profile">
                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/profile-icon.png" />
                                                    </div>
                                                    <span class="profile-name">Eu</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>

                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/profile-icon-user.png" />
                                                        <div class="atributo"></div>
                                                    </div>
                                                    <span class="profile-name">Usuario</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>

                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/profile-icon-childish.png" />
                                                        <div class="atributo"></div>
                                                    </div>
                                                    <span class="profile-name">Infantil</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>

                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/adicionar1.JPG" />
                                                        <div class="atributo"></div>
                                                    </div>
                                                    <span class="profile-name">Adionar perfil</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <span id="manage-profiles">
                                    <a aria-label="Gerenciar perfis" class="profile-button" >GERENCIAR PERFIS</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const btnUser = document.querySelector('ul');
    const managerProfiles = document.querySelector('#manage-profiles');

    managerProfiles.addEventListener('click', () => { 
        document.getElementById('root').innerHTML = `
        <div id="appMountPoint">
            <div class="netflix-sans-fount-loaded">
                <div>
                    <div class="bd dark-backgroud">
                        <div class="profiles-gate-container">
                            <header>
                                <div id="action" class="showcase-top">
                                    <img src="./assets/logo-netflix.png" alt="Netflix Logo" />
                                </div>
                            </header>

                            <div class="centered-div list-profiles-container">
                                <h1 class="profile-gate-label">Quem está assistindo?</h1>
                                <div class="list-profiles">
                                    <ul class="choose-profile">
                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/perfil1.JPG" />
                                                    </div>
                                                    <span class="profile-name">Eu</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>

                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/perfil-infantil1.jpg" />
                                                    </div>
                                                    <span class="profile-name">Infantil</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>

                                        <li class="profile">
                                            <div>
                                                <a class="profile-link">
                                                    <div class="avatar-wrapper">
                                                        <img class="profile-icon" src="./assets/perfil1.JPG"/>
                                                        <div class="atributo"></div>
                                                    </div>
                                                    <span class="profile-name">Usuario</span>
                                                </a>
                                                <div class="profile-children"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <span id="manage-profiles">
                                    <a aria-label="Gerenciar perfis" class="profile-button" >GERENCIAR PERFIS</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    btnUser.addEventListener('click', () => { 
        document.getElementById('root').innerHTML = `
        <header>
            <div class="container">
                <div class="showcase-top">
                    <img src="./assets/logo-netflix.png" alt="Netflix Logo" />

                    <nav>
                    <a href="#">Minha lista</a>
                    <a href="#">Bombando</a>
                    <a href="#">Filmes</a>
                    <a href="#">Séries</a>
                    <a href="#">Inicio</a>
                    </nav>
                </div>

            </div>
        </header>
   
        <main>
            <div class="main-movie">
                <div class="container">
                    <h3 class="title">HOUSE OF CARDS</h3>
                    <p class="description">Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível.</p>
                    <div class="botoes">
                        <button role="button" class="btn-movie">
                            <i class="fas fa-play"></i>
                            ASSISTIR AGORA
                        </button>

                        <button role="button" class="btn-movie">
                            <i class="fas fa-info-circle"></i>
                            MAIS INFORMAÇÕES
                        </button>
                    </div>
                </div>
            </div>
        </main>
   
        <div class="carousel-films">
            <div class="item">
                <img class="box-film" src="assets/mini1.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="assets/mini2.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="assets/mini3.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="assets/mini4.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="./assets/mini5.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="./assets/mini6.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="./assets/mini7.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="./assets/mini8.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="./assets/mini9.jpg" alt="" />
            </div>
            <div class="item">
                <img class="box-film" src="./assets/mini10.jpg" alt="" />
            </div>
        </div>`;
    });
})}

};

window.addEventListener("load", template);      
