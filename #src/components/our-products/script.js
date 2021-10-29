/*==================================   our-products js    ============================================*/

let card = [
    {
        imgSrc: 'logo/tightvnc-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'TightVNC v.2',
        description: [
            {
                text: 'Famous remote desktop tool, 100% free and Open Source',
            }
        ],
        middleText: '✓Windows XP & above  ✓Java Viewer',
        buttonText: [
            {
                text: 'Download your free copy',
                class: 'my-button',
            }
        ],
    },
    {
        imgSrc: 'logo/tightvnc-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'Remote Core',
        description: [
            {
                text: 'Easily add remote desktop functions into your own software',
            }
        ],
        middleText: '✓Windows XP & above  ✓Java Viewer',
        buttonText: [
            {
                text: 'More info & Request a demo',
                class: 'qq',
                remove: false,
            }
        ],
    },
    {
        imgSrc: 'logo/remoteripple-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'Remote Ripple',
        description: [
            {
                text: 'New app to view & control VNC remote desktops',
            }
        ],
        middleText: '✓Windows XP & above  ✓Java Viewer',
        buttonText: [
            {
                text: 'Get more info & Install',
            }
        ],
    },
    {
        imgSrc: 'logo/mightyviewer-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'MightyViewer',
        description: [
            {
                text: 'Continuously monitor many remote desktops in real time',
            }
        ],
        middleText: '✓Windows XP & above  ✓Java Viewer',
        buttonText: [
            {
                text: 'Get more info & Install',
                class: 'a123',
            }
        ],
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
        let addContent = function (items) {
            for (let item of items) {
                if (item.text) {
                    return item.text;
                }
            }
        }

        let addRemove = function (items) {
            for (let item of items) {
                if (item.remove) {
                    buttonText[j].remove();
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

        img[j].src = card[i].imgSrc;
        img[j].alt = card[i].imgAlt;
        title[j].textContent = card[i].title;
        //description[j].textContent = card[i].description;
        description[j].textContent = addContent(card[i].description);
        middleText[j].textContent = card[i].middleText;
        buttonText[j].textContent = addContent(card[i].buttonText);
        //addClass(card[i].buttonText);
        buttonText[j].classList.add(addClass(card[i].buttonText));
        addRemove(card[i].buttonText);

    }

    ourProduct.appendChild(cloneItem);
}
