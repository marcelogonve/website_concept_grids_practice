(function() {
    const openButton = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link');
    const closeMenu = document.querySelector('.nav-close');

    openButton.addEventListener('click', () =>{
        menu.classList.add('nav-link--show');
    });

    closeMenu.addEventListener('click', () =>{
        menu.classList.remove('nav-link--show');
    });

    /* Se puede simplificar la funcion usanto .toggle() */
})();