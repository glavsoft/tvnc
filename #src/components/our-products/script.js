/*==================================   our-products js    ============================================*/

let card = [
    {
        cardProduct: [{ class: 'card-tightvnc', }],
        img: [{ src: 'logo/tightvnc-logo-90x90.png', alt: 'tightvnc', }],
        title: [{ text: 'TightVNC v.2', }],
        description: [{ text: 'Famous remote desktop tool, 100% free and Open Source', }],
        middleText: [{ text: '✓Windows XP & above  ✓Java Viewer', }],
        button: [{ class: 'button-tightvnc', }],
        buttonText: [{ text: 'Download your free copy', class: 'my-button', }],
    },
    {
        cardProduct: [{ class: 'card-remotecoresdk', }],
        img: [{ src: 'logo/tightvnc-logo-90x90.png', alt: 'tightvnc', }],
        title: [{ text: 'Remote Core', }],
        description: [{ text: 'Easily add remote desktop functions into your own software', }],
        middleText: [{ text: '✓.NET ✓iOS ✓macOS ✓Android ✓Linux +more!', }],
        button: [{ class: 'button-remotecoresdk', }],
        buttonText: [{ text: 'More info & Request a demo', class: 'qq', isHidden: false, }],
    },
    {
        cardProduct: [{ class: 'card-remoteripple', }],
        img: [{ src: 'logo/remoteripple-logo-90x90.png', alt: 'Remote Ripple', }],
        title: [{ text: 'Remote Ripple', }],
        description: [{ text: 'New app to view & control VNC remote desktops', }],
        middleText: [{ text: '✓iOS  ✓iPadOS  ✓macOS  ✓Android', }],
        button: [{ class: 'button-remoteripple', }],
        buttonText: [{ text: 'Get more info & Install', }],
    },
    {
        cardProduct: [{ class: 'card-mightyviewer', }],
        img: [{ src: 'logo/mightyviewer-logo-90x90.png', alt: 'MightyViewer', }],
        title: [{ text: 'MightyViewer' }],
        description: [{ text: 'Continuously monitor many remote desktops in real time', }],
        middleText: [{ text: '✓ All modern versions of Windows', }],
        button: [{ class: 'button-mightyviewer', }],
        buttonText: [{ text: 'Get more info & Install', class: 'a123', }],
    },
];

let ourProduct = document.querySelector('.wrapper[data-our-product="2810210945"]');
let template = ourProduct.querySelector('#template').content;
let container = template.querySelector('.container');


for (let i = 0; i < card.length; i++) {
    let cloneItem = container.cloneNode(true);

    let cardProduct = cloneItem.querySelectorAll('.item');
    let img = cloneItem.querySelectorAll('img');
    let title = cloneItem.querySelectorAll('.title');
    let description = cloneItem.querySelectorAll('.description');
    let middleText = cloneItem.querySelectorAll('.middle > .paragraph');
    let button = cloneItem.querySelectorAll('.bottom');
    let buttonText = cloneItem.querySelectorAll('.bottom > .text');

    for (let j = 0; j < cloneItem.children.length; j++) {

        let addOptions = function (items, name) {
            for (let item of items) {
                if (item[name]) {
                    return item[name];
                }
            }
        }

        cardProduct[j].classList.add(addOptions(card[i].cardProduct, 'class'));
        img[j].src = addOptions(card[i].img, 'src');
        img[j].alt = addOptions(card[i].img, 'alt');
        title[j].textContent = addOptions(card[i].title, 'text');
        description[j].textContent = addOptions(card[i].description, 'text');
        middleText[j].textContent = addOptions(card[i].middleText, 'text');
        button[j].classList.add(addOptions(card[i].button, 'class'));
        buttonText[j].textContent = addOptions(card[i].buttonText, 'text');
        buttonText[j].classList.add(addOptions(card[i].buttonText, 'class'));
        buttonText[j].style.display = addOptions(card[i].buttonText, 'hidden');
    }

    ourProduct.appendChild(cloneItem);
}
