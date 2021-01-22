@@include('alert.js')
@@include('cookie.js')

//добавление кнопки бургер меню
let burgerButton = document.querySelector('.header__burger');
burgerButton.onclick = function() {
    burgerButton.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
};