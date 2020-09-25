const humburgerEl = document.querySelector('.humburger');
const menuEl = document.querySelector('.menu');
humburgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('menu_active');
    humburgerEl.classList.toggle('humburger_active');
})