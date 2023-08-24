document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});