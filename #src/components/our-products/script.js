/*==================================   our-products js    ============================================*/

let card = [
    {
        //cardBackgroundColor: '',
        imgSrc: 'logo/tightvnc-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'TightVNC v.2',
        description: 'Famous remote desktop tool, 100% free and Open Source',
        text: '✓Windows XP & above  ✓Java Viewer',
        buttonText: 'Download your free copy',
        //buttonBackgroundColor: '',
    },
    {
        //cardBackgroundColor: '',
        imgSrc: 'logo/tightvnc-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'Remote Core',
        description: 'Easily add remote desktop functions into your own software',
        text: '✓Windows XP & above  ✓Java Viewer',
        buttonText: 'Download your free copy',
        //buttonBackgroundColor: '',
    },
    {
        //cardBackgroundColor: '',
        imgSrc: 'logo/remoteripple-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'Remote Ripple',
        description: 'New app to view & control VNC remote desktops',
        text: '✓Windows XP & above  ✓Java Viewer',
        buttonText: 'Download your free copy',
        //buttonBackgroundColor: '',
    },
    {
        //cardBackgroundColor: '',
        imgSrc: 'logo/mightyviewer-logo-90x90.png',
        imgAlt: 'tightvnc',
        title: 'MightyViewer',
        description: 'Continuously monitor many remote desktops in real time',
        text: '✓Windows XP & above  ✓Java Viewer',
        buttonText: 'Download your free copy',
        //buttonBackgroundColor: '',
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

    for (let j = 0; j < img.length; j++) {
        img[j].src = card[i].imgSrc;
        img[j].alt = card[i].imgAlt;
        title[j].textContent = card[i].title;
        description[j].textContent = card[i].description;
        text[j].textContent = card[i].text;
        buttonText[j].textContent = card[i].buttonText;
    }

    ourProduct.appendChild(cloneItem);
}