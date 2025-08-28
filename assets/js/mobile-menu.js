/**
 * Enhanced Mobile Menu
 * Complete mobile navigation implementation
 */
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const body = document.body;
    
    // Create mobile menu container if it doesn't exist
    let mobileMenuContainer = document.querySelector('.mobile-menu-container');
    if (!mobileMenuContainer) {
        mobileMenuContainer = document.createElement('div');
        mobileMenuContainer.className = 'mobile-menu-container';
        document.body.appendChild(mobileMenuContainer);
    }
    
    // Clone main menu for mobile
    if (mainMenu && mobileMenuContainer) {
        const mobileMenu = mainMenu.cloneNode(true);
        mobileMenu.className = 'mobile-main-menu';
        mobileMenuContainer.appendChild(mobileMenu);
        
        // Add submenu toggles
        const menuItems = mobileMenu.querySelectorAll('li');
        menuItems.forEach(function(item) {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                const link = item.querySelector('a');
                if (link) {
                    // Add dropdown arrow
                    const arrow = document.createElement('i');
                    arrow.className = 'fas fa-chevron-down';
                    arrow.style.marginLeft = '10px';
                    arrow.style.transition = 'transform 0.3s';
                    link.appendChild(arrow);
                    
                    // Add click handler for submenu toggle
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const isOpen = submenu.style.display === 'block';
                        submenu.style.display = isOpen ? 'none' : 'block';
                        arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                    });
                }
            }
        });
    }
    
    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            if (mobileMenuContainer.classList.contains('active')) {
                mobileMenuContainer.classList.remove('active');
                body.classList.remove('menu-open');
            } else {
                mobileMenuContainer.classList.add('active');
                body.classList.add('menu-open');
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenuContainer.contains(e.target)) {
            mobileMenuContainer.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            mobileMenuContainer.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenuContainer.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

