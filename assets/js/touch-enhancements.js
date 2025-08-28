// Touch Enhancements for Mobile Devices
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Touch enhancements script loaded');
    
    // Get all mobile login buttons
    const mobileLoginButtons = document.querySelectorAll('.mobile-login-button');
    
    console.log('Found mobile login buttons:', mobileLoginButtons.length);
    
    // Add touch event listeners for better mobile experience
    mobileLoginButtons.forEach(button => {
        
        // Touch start event - immediate visual feedback
        button.addEventListener('touchstart', function(e) {
            console.log('Touch start on button:', this);
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'all 0.1s ease';
            this.style.background = 'white';
            this.style.color = 'black';
            this.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        });
        
        // Touch end event - restore normal state and navigate
        button.addEventListener('touchend', function(e) {
            console.log('Touch end on button:', this);
            const link = this.href;
            
            this.style.transform = 'scale(1)';
            this.style.transition = 'all 0.2s ease';
            this.style.background = 'rgba(0,0,0,0.8)';
            this.style.color = 'white';
            this.style.borderColor = this.classList.contains('samba') ? '#FFD700' : '#3CB371';
            
            // Navigate after brief delay to show animation
            if (link) {
                setTimeout(() => {
                    window.open(link, '_blank');
                }, 150);
            }
        });
        
        // Touch cancel event - restore normal state
        button.addEventListener('touchcancel', function(e) {
            console.log('Touch cancel on button:', this);
            this.style.transform = 'scale(1)';
            this.style.transition = 'all 0.2s ease';
            this.style.background = 'rgba(0,0,0,0.8)';
            this.style.color = 'white';
            this.style.borderColor = this.classList.contains('samba') ? '#FFD700' : '#3CB371';
        });
        
        // Mouse events for desktop fallback
        button.addEventListener('mousedown', function(e) {
            if (window.innerWidth <= 768) {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'all 0.1s ease';
                this.style.background = 'white';
                this.style.color = 'black';
                this.style.borderColor = 'rgba(0, 0, 0, 0.3)';
            }
        });
        
        button.addEventListener('mouseup', function(e) {
            if (window.innerWidth <= 768) {
                this.style.transform = 'scale(1)';
                this.style.transition = 'all 0.2s ease';
                this.style.background = 'rgba(0,0,0,0.8)';
                this.style.color = 'white';
                this.style.borderColor = this.classList.contains('samba') ? '#FFD700' : '#3CB371';
            }
        });
        
        // Mouse leave event - ensure button returns to normal state
        button.addEventListener('mouseleave', function(e) {
            if (window.innerWidth <= 768) {
                this.style.transform = 'scale(1)';
                this.style.transition = 'all 0.2s ease';
                this.style.background = 'rgba(0,0,0,0.8)';
                this.style.color = 'white';
                this.style.borderColor = this.classList.contains('samba') ? '#FFD700' : '#3CB371';
            }
        });
    });
    
    // Add haptic feedback for supported devices
    if ('vibrate' in navigator) {
        mobileLoginButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                navigator.vibrate(10); // Short vibration on touch
            });
        });
    }
    
    // Prevent double-tap zoom on mobile
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add focus management for accessibility
    mobileLoginButtons.forEach(button => {
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid #3CB371';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});
