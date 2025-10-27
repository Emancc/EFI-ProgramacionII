// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Función para alternar el menú
    function toggleMenu() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('opacity-0');
        overlay.classList.toggle('pointer-events-none');
    }

    // Event listeners
    if (mobileMenuButton) mobileMenuButton.addEventListener('click', toggleMenu);
    if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en un enlace (solo en móviles)
    const navLinks = document.querySelectorAll('#sidebar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al cambiar a escritorio
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.add('opacity-0', 'pointer-events-none');
        }
    });
});
