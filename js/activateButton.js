const btnMenu = document.getElementById('btn-menu');

function openMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const footer = document.getElementById('footer');
    footer.classList.toggle('active');

}

btnMenu.addEventListener('touchstart', openMenu);