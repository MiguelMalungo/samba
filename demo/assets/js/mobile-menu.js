/**
 * Simple Mobile Menu
 * Basic, reliable implementation
 */
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    // Toggle mobile menu
    if (mobileMenuToggle && mobileMenuContainer) {
        mobileMenuToggle.addEventListener('click', function() {
            if (mobileMenuContainer.classList.contains('active')) {
                mobileMenuContainer.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                mobileMenuContainer.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Toggle submenus
    if (submenuToggles.length > 0) {
        submenuToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('mobile-submenu')) {
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                        this.querySelector('i').classList.remove('fa-chevron-up');
                        this.querySelector('i').classList.add('fa-chevron-down');
                    } else {
                        submenu.style.display = 'block';
                        this.querySelector('i').classList.remove('fa-chevron-down');
                        this.querySelector('i').classList.add('fa-chevron-up');
                    }
                }
            });
        });
    }
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && mobileMenuContainer) {
            mobileMenuContainer.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset all submenus
            const submenus = document.querySelectorAll('.mobile-submenu');
            submenus.forEach(function(submenu) {
                submenu.style.display = '';
            });
            
            // Reset all toggle icons
            const toggleIcons = document.querySelectorAll('.submenu-toggle i');
            toggleIcons.forEach(function(icon) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            });
        }
    });
});

