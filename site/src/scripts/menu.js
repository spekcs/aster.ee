const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expnaded') === 'true';
    menu.setAttribute('aria-expanded', `${!isExpanded}`);
});