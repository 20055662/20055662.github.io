document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
    });
});
