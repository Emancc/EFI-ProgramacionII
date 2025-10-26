// Toggle mobile menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('opacity-0');
    overlay.classList.toggle('pointer-events-none');
    document.body.classList.toggle('overflow-hidden');
}

// Event listeners
function setupMobileMenu() {
    if (mobileMenuButton && closeMenu && sidebar && overlay) {
        mobileMenuButton.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('aside nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    toggleMenu();
                }
            });
        });
    }
}

// Ajustar altura del contenido principal
function adjustContentHeight() {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
    const mainContent = document.querySelector('main > section');
    
    if (mainContent) {
        const viewportHeight = window.innerHeight;
        mainContent.style.minHeight = `${viewportHeight - headerHeight - footerHeight - 32}px`;
    }
}

// Inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    adjustContentHeight();
    
    // Ajustar altura al redimensionar la ventana
    window.addEventListener('resize', adjustContentHeight);
});
