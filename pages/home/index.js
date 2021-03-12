const home = () => {
    const homeContainer = document.createElement('div');
    document.getElementById('root').innerHTML = `
    <header>
        <div class="container">
            <h2 class="logo">NETFLIX</h2>
        </div>
    </header>
    <main>
        <h1 class="title">Quem esta assistindo?</h1>
        <div class="container-profile">
            <div class="">
                <img id="profile-user" src="./assets/perfil.JPG"  alt="Foto padrão de perfil"/>
                <h3 class="center">Eu</h3>
            </div>
            <div class="">
                <img id="profile" src="./assets/perfil-infantil.JPG"  alt="Foto padrão de perfil"/>
                <h3 class="center">Infantil</h3>
            </div>
            <div class="">
                <img id="add" src="./assets/adicionar1.JPG" alt="">
                <h3 class="center">Adicionar Perfil</h3>
            </div>
        </div>
        <span class="profile-button">
            <a aria-label="Gerenciar perfis" >GERENCIAR PERFIS</a>
        </span>
    </main>
            `;
            return home;

            const profileUser = home.querySelector('profile-button');

            const managerProfile = () => {
                document.getElementById('root').innerHTML = `
                <header>
                    <div class="container">
                        <h2 class="logo">NETFLIX</h2>
                    </div>
                </header>
                <main>
                    <h1 class="title">Quem esta assistindo?</h1>
                    <div class="container-profile">
                        <div class="">
                            <img id="profile-user" src="./assets/perfil1.JPG"  alt="Foto padrão de perfil"/>
                            <h3 class="center">Eu</h3>
                        </div>
                        <div class="">
                            <img id="profile" src="./assets/perfil-infantil1.JPG"  alt="Foto padrão de perfil"/>
                            <h3 class="center">Infantil</h3>
                        </div>
                        <div class="">
                            <img id="add" src="./assets/adicionar1.JPG" alt="">
                            <h3 class="center">Adicionar Perfil</h3>
                        </div>
                    </div>
                    <span class="profile-button">
                        <a aria-label="Gerenciar perfis" >GERENCIAR PERFIS</a>
                    </span>
                </main>
                        `;
            };
        
            profileUser.addEventListener('click', managerProfile);

};
        window.addEventListener("load", home);

