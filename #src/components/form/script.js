let privacyAgreeCheckbox = document.getElementById('privacy_agreeCheckbox');
let formSubmitButton = document.getElementById('submit');
// if (privacyAgreeCheckbox.checked === false) { //условие если галочка не выбрана то есть false то тогда делать кнопку не активной
//     formSubmitButton.disabled = true;
// }

function getCheckedPolicy() {
    formSubmitButton.disabled = !privacyAgreeCheckbox.checked;  //если выбран чекбокс то кнопка активна, сянта галочка кнопка не активна
}

setInterval(function getCheckedPolicy() {  //если по какой то причине не отправлена форма то проверять стоит ли галочка на чекбоксе
    formSubmitButton.disabled = !privacyAgreeCheckbox.checked;  //если выбран чекбокс то кнопка активна, не сянта галочка кнопка не активна
}, 0)
