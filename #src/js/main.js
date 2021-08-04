/*==================================   main js    ============================================*/
(function () {
    let tables = document.getElementsByTagName('table'),
        length = tables.length,
        i, wrapper;

    for (i = 0; i < length; i++) {
        wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'table-overflow');
        tables[i].parentNode.insertBefore(wrapper, tables[i]);
        wrapper.appendChild(tables[i]);
    }
} ());