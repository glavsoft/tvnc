( function () {

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
    if (isMobile.any()) {
        body.classList.add('touch');
        let arrow = document.querySelectorAll('.arrow');
        for (let i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].previousElementSibling;
            let subMenu = arrow[i].nextElementSibling;
            let thisArrow = arrow[i];

            thisLink.classList.add('parent');
            arrow[i].addEventListener('click', function () {
                subMenu.classList.toggle('open');
                thisArrow.classList.toggle('active');
            });
        }
    } else {
        body.classList.add('mouse');
    }

//добавление кнопки бургер меню
    let burgerButton = document.querySelector('.header__burger');
    burgerButton.onclick = function () {
        burgerButton.classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    };

//Активный пункт меню с помощью JavaScript
    document.querySelectorAll('.menu__list li a').forEach(function (el) {
        if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {                      //по умолчанию было -1
            el.classList.add('active-menu__link');
        }
    });

//Активный пункт САМОГО ВЕРХНЕГО меню с помощью JavaScript (подсветка родителя)
    document.querySelectorAll(".menu__list li a").forEach(function (el1) {
        if (el1.getAttribute('class') === 'sub-menu__link active-menu__link') {
            let pktMainMenu = el1.parentNode.parentNode.parentNode.querySelector('.menu__link');
            pktMainMenu.classList.add('active-menu__link');
        }
    });


//активный пункт home и его родитель с учетом pathname = index.html либо /
    document.querySelectorAll('.menu__list li a').forEach(function (el2) {
        if (window.location.pathname === '/tvnc/dist/' && el2.getAttribute('href') === 'index.html') {    //активный пункт home и его родитель в целом не нужная штука, когда зальется на хостинг можно убрать если в корне то просто /  или    /tvnc/dist/
            el2.classList.add('active-menu__link');
            let pktMainMenu = el2.parentNode.parentNode.parentNode.querySelector('.menu__link');
            pktMainMenu.classList.add('active-menu__link');
        }
    });

} ());