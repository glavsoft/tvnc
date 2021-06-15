const cookieBlock = document.querySelector('.cookie-block');
const okCookie = document.querySelectorAll('.ok-cookie');

for (let Item of okCookie) {
    // закрываем по клику
    Item.addEventListener('click', () => {
        // записываем cookie на 30 деней, с которой мы не показываем окно
        cookieBlock.style.display = 'none';
        let date = new Date;
        date.setDate(date.getDate() + 30);
        document.cookie = "hide-cookie=ok; path=/; expires=" + date.toUTCString();
    });
}

let cookies = () => {
    // функция возвращает cookie с именем name, если есть, если нет, то undefined
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
    if (!getCookie('hide-cookie')) {
        // показываем
        setTimeout(() => {
            cookieBlock.style.display = 'block';
        }, 1000);
    }
}

cookies();