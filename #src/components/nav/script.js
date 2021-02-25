//добавление кнопки бургер меню
let burgerButton = document.querySelector('.header__burger');
burgerButton.onclick = function() {
    burgerButton.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
};

//Активный пункт меню с помощью JavaScript
document.querySelectorAll('.header__list li a').forEach(function(el) {
    if ( window.location.pathname.indexOf(el.getAttribute('href')) > 0 ) {                      //по умолчанию было -1
        el.classList.add('active-menu__link');
    }
    else if ( (window.location.pathname.indexOf(el.getAttribute('href')) > -1 && window.location.pathname === '/') ) {    // ('/') второе условие нужно для того что бы исключить корневой файл
        el.classList.add('active-menu__link');

    }
    else if (window.location.pathname === '/tvnc/dist/') {                                                                //в целом не нужная штука, когда зальется на хостинг можно убрать если в корне то просто /
        document.querySelector('.header__list li a').classList.add('active-menu__link');
    }

});

//Активный пункт САМОГО ВЕРХНЕГО меню с помощью JavaScript
document.querySelectorAll(".header__list li a").forEach(function(el1){
    //console.log(el1.getAttribute('class'));
    if (el1.getAttribute('class') == 'sub-menu__link active-menu__link') {
        //console.log(el1.parentElement.innerHTML);
        //console.log('sadadsasda');
        //console.log(el1.parentNode.parentNode.parentNode.innerHTML);
        let punktMainMenu = el1.parentNode.parentNode.parentNode.querySelector('.header__link');
        punktMainMenu.classList.add('active-menu__link');
    }
});