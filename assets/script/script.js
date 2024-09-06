/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para os elementos do menu
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Mostra o menu quando o botão de alternância é clicado
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    // Oculta o menu quando o botão de fechar é clicado
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

    // Fecha o menu se um item de navegação for clicado (opcional)
    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/

document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true  // Ativar se eu quiser que os elementos revelem novamente ao rolar
    });

    // Configurações para diferentes elementos
    sr.reveal('.home_titulo, .home_subtitulo, .home_descricao, .home_btn',  {
        origin: 'top'
        
    });
    sr.reveal('.introducao_data, .resultados_data, .resultados_img', {
        origin: 'left',
        delay: 400
    });

    sr.reveal('.equipe_data', {
        origin: 'right',
        delay: 400
    });


    sr.reveal('.contato_data', {
        interval: 200
    });
    sr.reveal('.empresas_data, .teste_data,', {
        interval: 200
    });
});