function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const body = document.body;

    // Alternar la clase 'open' para mostrar/ocultar el menú
    menu.classList.toggle('open');

    // Si el menú está abierto, añade la clase 'no-scroll' al body, de lo contrario, quítala
    if (menu.classList.contains('open')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}
