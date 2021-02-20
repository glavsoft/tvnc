"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cookieBlock = document.querySelector('.cookie-block');
var okCookie = document.querySelectorAll('.ok-cookie');

var _iterator = _createForOfIteratorHelper(okCookie),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var Item = _step.value;
    // закрываем по клику
    Item.addEventListener('click', function () {
      // записываем cookie на 30 деней, с которой мы не показываем окно
      cookieBlock.style.display = 'none';
      var date = new Date();
      date.setDate(date.getDate() + 30);
      document.cookie = "hide-cookie=ok; path=/; expires=" + date.toUTCString();
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var cookies = function cookies() {
  // функция возвращает cookie с именем name, если есть, если нет, то undefined
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  } // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ


  if (!getCookie('hide-cookie')) {
    // показываем
    setTimeout(function () {
      cookieBlock.style.display = 'block';
    }, 1000);
  }
};

cookies(); //добавление кнопки бургер меню

var burgerButton = document.querySelector('.header__burger');

burgerButton.onclick = function () {
  burgerButton.classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
}; //Активный пункт меню с помощью JavaScript


document.querySelectorAll('.header__list li a').forEach(function (el) {
  if (window.location.pathname.indexOf(el.getAttribute('href')) > 0) {
    //по умолчанию было -1
    el.classList.add('active-menu__link');
  } else if (window.location.pathname.indexOf(el.getAttribute('href')) > -1 && window.location.pathname === '/tvnc/dist') {
    // ('/') второе условие нужно для того что бы исключить корневой файл
    el.classList.add('active-menu__link');
  } else if (window.location.pathname.indexOf(el.getAttribute('href')) > -1 && window.location.pathname === '/index.html') {
    // ('/index.html')
    el.classList.add('active-menu__link');
  } //console.log(window.location.pathname);

}); //Активный пункт САМОГО ВЕРХНЕГО меню с помощью JavaScript

document.querySelectorAll(".header__list li a").forEach(function (el1) {
  //console.log(el1.getAttribute('class'));
  if (el1.getAttribute('class') == 'sub-menu__link active-menu__link') {
    //console.log(el1.parentElement.innerHTML);
    //console.log('sadadsasda');
    //console.log(el1.parentNode.parentNode.parentNode.innerHTML);
    var punktMainMenu = el1.parentNode.parentNode.parentNode.querySelector('.header__link');
    punktMainMenu.classList.add('active-menu__link');
  }
});