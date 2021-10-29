/*==================================   our-products js    ============================================*/

let card = [
    {
        img: [{imgSrc: 'logo/tightvnc-logo-90x90.png', imgAlt: 'tightvnc',}],
        title: [{text: 'TightVNC v.2',}],
        description: [{text: 'Famous remote desktop tool, 100% free and Open Source',}],
        middleText: [{text: '✓Windows XP & above  ✓Java Viewer',}],
        buttonText: [{text: 'Download your free copy', class: 'my-button',}],
    },
    {
        img: [{imgSrc: 'logo/tightvnc-logo-90x90.png', imgAlt: 'tightvnc',}],
        title: [{text: 'Remote Core',}],
        description: [{text: 'Easily add remote desktop functions into your own software',}],
        middleText: [{text: '✓.NET ✓iOS ✓macOS ✓Android ✓Linux +more!',}],
        buttonText: [{text: 'More info & Request a demo', class: 'qq', isHidden: false,}],
    },
    {
        img: [{imgSrc: 'logo/remoteripple-logo-90x90.png', imgAlt: 'Remote Ripple',}],
        title: [{text: 'Remote Ripple',}],
        description: [{text: 'New app to view & control VNC remote desktops',}],
        middleText: [{text: '✓iOS  ✓iPadOS  ✓macOS  ✓Android',}],
        buttonText: [{text: 'Get more info & Install',}],
    },
    {
        img: [{imgSrc: 'logo/mightyviewer-logo-90x90.png', imgAlt: 'MightyViewer',}],
        title: [{text: 'MightyViewer'}],
        description: [{text: 'Continuously monitor many remote desktops in real time',}],
        middleText: [{text: '✓ All modern versions of Windows',}],
        buttonText: [{text: 'Get more info & Install', class: 'a123',}],
    },
];

let ourProduct = document.querySelector('.container[data-our-product="2810210945"]');
let template = ourProduct.querySelector('#template').content;
let item = template.querySelector('.item');


for (let i = 0; i < card.length; i++) {
    let cloneItem = item.cloneNode(true);

    let img = cloneItem.querySelectorAll('img');
    let title = cloneItem.querySelectorAll('.title');
    let description = cloneItem.querySelectorAll('.description');
    let middleText = cloneItem.querySelectorAll('.middle > .paragraph');
    let buttonText = cloneItem.querySelectorAll('.bottom > .text');

    for (let j = 0; j < cloneItem.children.length; j++) {

        let addSrc = function (items) {
            for (let item of items) {
                if (item.imgSrc) {
                    return item.imgSrc;
                }
            }
        }

        let addAlt = function (items) {
            for (let item of items) {
                if (item.imgAlt) {
                    return item.imgAlt;
                }
            }
        }

        let addContent = function (items) {
            for (let item of items) {
                if (item.text) {
                    return item.text;
                }
            }
        }

        let addHidden = function (items) {
            for (let item of items) {
                if (item.isHidden) {
                    return 'none'
                }
            }
        }

        let addClass = function (items) {
            for (let item of items) {
                if (item.class) {
                    return item.class;
                }
            }
        }

        img[j].src = addSrc(card[i].img);
        img[j].alt = addAlt(card[i].img);
        title[j].textContent = addContent(card[i].title);
        description[j].textContent = addContent(card[i].description);
        middleText[j].textContent = addContent(card[i].middleText);
        buttonText[j].textContent = addContent(card[i].buttonText);
        buttonText[j].classList.add(addClass(card[i].buttonText));
        buttonText[j].style.display = addHidden(card[i].buttonText);
    }

    ourProduct.appendChild(cloneItem);
}
