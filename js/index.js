const home = () => {
    document.getElementById('root').innerHTML = `
    <header class="showcase">
        <div class="showcase-top">
            <img src="./assets/logo-netflix.png" alt="Netflix Logo">
            <a href="#" class="btn-action btn-home btn-rounded">Entrar</a>
        </div>
        <div class="showcase-content">
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
            <h2>Assista onde quiser. Cancele quando quiser.</h2>
            <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <div class="input">
                <input type="email" name="email" placeholder="Email"/>
                <a href="#" class="btn-rounded"><button class="btn  btn-red btn-home">Vamos lá ></button></a>
            </div>
        </div>
    </header>

    <section class="style-cards">
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

    <section class="story-card faq-card">
        <div class="story-card-text">
            <h1 class="story-card-title">Perguntas frequentes</h1>
            <ul class="faq-list">
                <li class="faq-list-item">
                    <button class="faq-question">
                        O que é Netflix?
                    </button>
                    <svg class="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                    </svg>
                </li>
                <li class="faq-list-item">Quanto custa a Netflix?</li>
                <li class="faq-list-item">Onde posso assistir?</li>
                <li class="faq-list-item">Como faço para cancelar?</li>
                <li class="faq-list-item">O que eu posso assistir na Netflix?</li>
                <li class="faq-list-item">A Netflix é adequada para crianças?</li>
            </ul>
            <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <div class="input">
                <input type="email" name="email" placeholder="Email"/>
                <a href="#" class="btn-rounded"><button class="btn btn-red btn-lg btn-home">Vamos lá ></button></a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p class="title-footer">Dúvidas? Ligue 0800-761-4631</p>
        <div class="footer-cols">
            <ul>
                <li><a href="#">Perguntas frequentes</a></li>
                <li><a href="#">Relações com investidores</a></li>
                <li><a href="#">Formas de assistir</a></li>
                <li><a href="#">Informações corporativas</a></li>
                <li><a href="#">Originais Netflix</a></li>
            </ul>
            <ul>
                <li><a href="#">Centro de ajuda</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Entre em contato</a></li>
            </ul>
            <ul>
                <li><a href="#">Conta</a></li>
                <li><a href="#">Resgatar cartão pré-pago</a></li>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Teste de velocidade</a></li>
            </ul>
            <ul>
                <li><a href="#">Imprensa</a></li>
                <li><a href="#">Comprar cartão pré-pago</a></li>
                <li><a href="#">Preferências de cookies</a></li>
                <li><a href="https://help.netflix.com/legal/notices">Avisos legais</a></li>
            </ul>
        </div>
    </footer>
    `;

    const btnUser = document.querySelector('.btn-action');
    btnUser.addEventListener('click', () => {
    document.getElementById('root').innerHTML = `
    <div id="appMountPoint">
    <div class="netflix-sans-fount-loaded">
    <div>
    <div class="bd dark-backgroud">
    <div class="profiles-gate-container">
    <header>
        <div class="showcase-top">
            <img src="./assets/logo-netflix.png" alt="Netflix Logo">
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
 const imgUser = document.querySelector('ul');
 const profileManager = document.querySelector('#manage-profiles');

 profileManager.addEventListener('click', () => {
     document.getElementById('root').innerHTML = `
     <div id="appMountPoint">
     <div class="netflix-sans-fount-loaded">
         <div>
             <div class="bd dark-backgroud">
                 <div class="profiles-gate-container">
                     <header>
                         <div id="action" class="showcase-top">
                             <img src="./assets/logo-netflix.png" alt="Netflix Logo">
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
     </div>
     `;
 });
 
 imgUser.addEventListener('click', () => {
     document.getElementById('root').innerHTML =`
     <header>
         <div class="container">
            <div class="showcase-top">
                <img src="./assets/logo-netflix.png" alt="Netflix Logo">
            </div>
             <nav>
                 <a href="#">Inicio</a>
                 <a href="#">Séries</a>
                 <a href="#">Filmes</a>
                 <a href="#">Documentários</a>
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
                     <img class="box-filme" src="./assets/mini5.jpg" alt="" srcset="">
                 </div>
                 <div class="item">
                     <img class="box-filme" src="./assets/mini6.jpg" alt="" srcset="">
                 </div>
                 <div class="item">
                     <img class="box-filme" src="./assets/mini7.jpg" alt="" srcset="">
                 </div>
                 <div class="item">
                     <img class="box-filme" src="./assets/mini8.jpg" alt="" srcset="">
                 </div>
                 <div class="item">
                     <img class="box-filme" src="./assets/mini9.jpg" alt="" srcset="">
                 </div>
                 <div class="item">
                     <img class="box-filme" src="./assets/mini10.jpg" alt="" srcset="">
                 </div>
     </div>
     `;
 });
})


    return home;
};
        window.addEventListener("load", home);
