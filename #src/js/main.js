/*==================================   main js    ============================================*/
// добавление обертки для всех таблиц

let tables = document.getElementsByTagName('table');
let length = tables.length;

for (let i = 0; i < length; i++) {
    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'table-overflow');
    tables[i].parentNode.insertBefore(wrapper, tables[i]);
    wrapper.appendChild(tables[i]);
}
