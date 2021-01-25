@@include('alert.js')
@@include('cookie.js')

//добавление кнопки бургер меню
let burgerButton = document.querySelector('.header__burger');
burgerButton.onclick = function() {
    burgerButton.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
};
//Активный пункт меню с помощью JavaScript
document.querySelectorAll('.header__list li a').forEach(function(el) {
    if ( window.location.pathname.indexOf(el.getAttribute('href')) > -1 ) {
        el.classList.add('active-menu__link');
    }
});