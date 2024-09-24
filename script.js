document.addEventListener('DOMContentLoaded', function () {
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('overlay');

    let lastWindowWidth = window.innerWidth; // Store initial window width
    let isNavbarOpen = false; // Track navbar state
    const cpsHeading = document.querySelector('.cps-heading');
    const cpsSkills = document.querySelector('.skills-list')
    const cpsCard = document.querySelector('.cps-card')

    // Function to update the visibility of menu buttons
    function updateMenuButtonsVisibility() {
        if (window.innerWidth >= 1100) {
            // Desktop view: Hide mobile menu buttons and ensure the navbar is hidden
            navbar.style.display = 'none';
            overlay.style.display = 'none';
            openMenuBtn.style.display = 'none';
            closeMenuBtn.style.display = 'none';
            isNavbarOpen = false;
        } else {
            // Mobile view: Show/hide menu buttons based on current state
            openMenuBtn.style.display = isNavbarOpen ? 'none' : 'block';
            closeMenuBtn.style.display = isNavbarOpen ? 'block' : 'none';
            navbar.style.display = isNavbarOpen ? 'flex' : 'none';
            overlay.style.display = isNavbarOpen ? 'block' : 'none';
        }
    }

    // Function to handle navbar toggling on smaller screens
    function toggleMobileMenu(show) {
        if (window.innerWidth < 1100) { // Only for screen widths less than 1100px
            navbar.style.display = show ? "flex" : "none";
            overlay.style.display = show ? "block" : "none";
            openMenuBtn.style.display = show ? "none" : "block";
            closeMenuBtn.style.display = show ? "block" : "none";
            isNavbarOpen = show;
        }
    }

    openMenuBtn.addEventListener('click', function () {
        toggleMobileMenu(true);
    });

    closeMenuBtn.addEventListener('click', function () {
        toggleMobileMenu(false);
    });

    overlay.addEventListener('click', function () {
        toggleMobileMenu(false);
    });
    
    cpsHeading.addEventListener('click', () => {
        if (cpsSkills.style.display === 'none') {
            cpsSkills.style.display = 'block'; // Show the skills list
            cpsHeading.textContent = "Core Professional Skills";
            
            // Set card width dynamically based on screen size
            if (window.innerWidth >= 468) {
                cpsCard.style.width = '26rem';
            }else if (window.innerWidth <= 360) {
                cpsCard.style.width = '19rem';
            } else if (window.innerWidth <= 380) {
                cpsCard.style.width = '20rem';
            } else if (window.innerWidth > 380 && window.innerWidth < 430) {
                cpsCard.style.width = '22rem';
            }
        } else {
            cpsSkills.style.display = 'none'; // Hide the skills list
            cpsHeading.textContent = "Skills";
            cpsCard.style.width = '6rem'; // Minimized width
        }
    });
    
    // Optional: Add the resize listener to handle window resizing
    window.addEventListener('resize', () => {
        if (cpsSkills.style.display === 'block') {
            if (window.innerWidth >= 390) {
                cpsCard.style.width = '26rem';
            } else if (window.innerWidth <= 360) {
                cpsCard.style.width = '19rem';
            } else if (window.innerWidth <= 380) {
                cpsCard.style.width = '20rem';
            } else if (window.innerWidth >= 380 && window.innerWidth < 430) {
                cpsCard.style.width = '22rem';
            }
        }
    });
});