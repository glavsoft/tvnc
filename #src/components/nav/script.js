//переменная которая определеяет с мобилього ли устройства или планшета зашли на сайт
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};
let body = document.querySelector('body');
if(isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for(let i=0; i<arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
}else{
    body.classList.add('mouse');
}

//добавление кнопки бургер меню
let burgerButton = document.querySelector('.header__burger');
burgerButton.onclick = function() {
    burgerButton.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
};

//Активный пункт меню с помощью JavaScript
document.querySelectorAll('.menu__list li a').forEach(function(el) {
    if ( window.location.pathname.indexOf(el.getAttribute('href')) > 0 ) {                      //по умолчанию было -1
        el.classList.add('active-menu__link');
    }
    // else if ( (window.location.pathname.indexOf(el.getAttribute('href')) > -1 && window.location.pathname === '/') ) {    // ('/') второе условие нужно для того что бы исключить корневой файл
    //     el.classList.add('active-menu__link');
    //
    // }
    // else if (window.location.pathname === '/') {                                                                //в целом не нужная штука, когда зальется на хостинг можно убрать если в корне то просто /  или    /tvnc/dist/
    //     document.querySelector('.menu__list li a').classList.add('active-menu__link');
    //     document.querySelector('.menu__list .sub-menu__list li a').classList.add('active-menu__link');   //активный пункт home
    // }

});

//Активный пункт САМОГО ВЕРХНЕГО меню с помощью JavaScript
document.querySelectorAll(".menu__list li a").forEach(function(el1){
    //console.log(el1.getAttribute('class'));
    if (el1.getAttribute('class') == 'sub-menu__link active-menu__link') {
        //console.log(el1.parentElement.innerHTML);
        //console.log('sadadsasda');
        //console.log(el1.parentNode.parentNode.parentNode.innerHTML);
        let punktMainMenu = el1.parentNode.parentNode.parentNode.querySelector('.menu__link');
        punktMainMenu.classList.add('active-menu__link');
    }
});