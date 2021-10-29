/*==================================   our-products js    ============================================*/

let card = [
    {
        imgSrc: 'logo/tightvnc-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'TightVNC v.2',
        description: 'Famous remote desktop tool, 100% free and Open Source',
        text: '✓Windows XP & above  ✓Java Viewer',
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
        description: 'Easily add remote desktop functions into your own software',
        text: '✓Windows XP & above  ✓Java Viewer',
        buttonText: [
            {
                text: 'More info & Request a demo',
                class: 'qq',
                remove: true,
            }
        ],
    },
    {
        imgSrc: 'logo/remoteripple-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'Remote Ripple',
        description: 'New app to view & control VNC remote desktops',
        text: '✓Windows XP & above  ✓Java Viewer',
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
        description: 'Continuously monitor many remote desktops in real time',
        text: '✓Windows XP & above  ✓Java Viewer',
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
    let text = cloneItem.querySelectorAll('.middle > .text');
    let buttonText = cloneItem.querySelectorAll('.bottom > .text');

    for (let j = 0; j < cloneItem.children.length; j++) {
        let addContent = function (items) {
            for (let item of items) {
                return item.text;
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
                    buttonText[j].classList.add(item.class);
                }
            }
        }

        img[j].src = card[i].imgSrc;
        img[j].alt = card[i].imgAlt;
        title[j].textContent = card[i].title;
        description[j].textContent = card[i].description;
        text[j].textContent = card[i].text;
        buttonText[j].textContent = addContent(card[i].buttonText);
        //buttonText[j].classList.add(addClass(card[i].buttonText));
        addClass(card[i].buttonText);
        addRemove(card[i].buttonText);

    }

    ourProduct.appendChild(cloneItem);
}
