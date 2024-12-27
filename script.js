// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Example of adding a simple alert on button click
    document.querySelector('.cta-button').addEventListener('click', () => {
        alert('Thank you for your interest! Redirecting to the contact page...');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
