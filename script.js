// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.active').classList.remove('active');
            link.classList.add('active');
            const target = link.getAttribute('href');
            document.querySelector('main').innerHTML = `<object type="text/html" data="${target}" ></object>`;
        });
    });
});
