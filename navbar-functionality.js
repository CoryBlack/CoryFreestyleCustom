// navbar-functionality.js

function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
    const navLinks = document.querySelectorAll('.navbar-small a:not(#logo)');
    navLinks.forEach(link => link.style.display = link.style.display === 'block' ? 'none' : 'block');
}

// Close the menu by default
window.onload = function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelectorAll('.navbar-small a:not(#logo)');
    menuIcon.classList.remove('active');
    navLinks.forEach(link => link.style.display = 'none');
}