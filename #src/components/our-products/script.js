/*==================================   our-products js    ============================================*/

let card = [
    {
        cardProduct: [{ class: 'card-tightvnc', }],
        img: [{ src: 'logo/tightvnc-logo-90x90.png', alt: 'tightvnc', }],
        title: [{ text: 'TightVNC v.2', }],
        description: [{ text: 'Famous remote desktop tool, 100% free and Open Source', }],
        middleText: [{ text: '✓Windows XP & above  ✓Java Viewer', }],
        button: [{ class: 'button-tightvnc', url: '/download.php', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/tightvnc/rcolumn');", }],
        buttonText: [{ text: 'Download your free copy', }],
    },
    {
        cardProduct: [{ class: 'card-remotecoresdk', }],
        img: [{ src: '', alt: '', hidden: 'none', }],
        title: [{ text: 'Remote Core SDK', }],
        description: [{ text: 'Easily add remote desktop functions into your own software', }],
        middleText: [{ text: '✓.NET ✓iOS ✓macOS ✓Android ✓Linux +more!', }],
        button: [{ class: 'button-remotecoresdk', url: 'https://remotecoresdk.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/remotecoresdk/rcolumn');", }],
        buttonText: [{ text: 'More info & Request a demo', }],
    },
    {
        cardProduct: [{ class: 'card-remoteripple', }],
        img: [{ src: 'logo/remoteripple-logo-90x90.png', alt: 'Remote Ripple', }],
        title: [{ text: 'Remote Ripple', }],
        description: [{ text: 'New app to view & control VNC remote desktops', }],
        middleText: [{ text: '✓iOS  ✓iPadOS  ✓macOS  ✓Android', }],
        button: [{ class: 'button-remoteripple', url: 'https://remoteripple.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/remoteripple/rcolumn');", }],
        buttonText: [{ text: 'Get more info & Install', }],
    },
    {
        cardProduct: [{ class: 'card-mightyviewer', }],
        img: [{ src: 'logo/mightyviewer-logo-90x90.png', alt: 'MightyViewer', }],
        title: [{ text: 'MightyViewer' }],
        description: [{ text: 'Continuously monitor many remote desktops in real time', }],
        middleText: [{ text: '✓ All modern versions of Windows', }],
        button: [{ class: 'button-mightyviewer', url: 'https://mightyviewer.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/mightyviewer/rcolumn');", }],
        buttonText: [{ text: 'Get more info & Install', }],
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
        img[j].style.display = addOptions(card[i].img, 'hidden');
        title[j].textContent = addOptions(card[i].title, 'text');
        description[j].textContent = addOptions(card[i].description, 'text');
        middleText[j].textContent = addOptions(card[i].middleText, 'text');
        button[j].classList.add(addOptions(card[i].button, 'class'));
        button[j].href = addOptions(card[i].button, 'url');
        button[j].target = addOptions(card[i].button, 'target');
        button[j].setAttribute('onClick', addOptions(card[i].button, 'onclick'));
        buttonText[j].textContent = addOptions(card[i].buttonText, 'text');
        buttonText[j].classList.add(addOptions(card[i].buttonText, 'class'));
        buttonText[j].style.display = addOptions(card[i].buttonText, 'hidden');
    }

    ourProduct.appendChild(cloneItem);
}
