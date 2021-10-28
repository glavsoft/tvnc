/*==================================   our-products js    ============================================*/

let card = [
    {
        //cardBackgroundColor: '',
        img: 'logo/tightvnc-logo-90x90.png',
        alt: 'tightvnc',
        title: 'TightVNC v.2',
        description: 'Famous remote desktop tool, 100% free and Open Source',
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
    let imgSrcs = ourProduct.querySelectorAll('img');
    for (let j = 0; j < i; j++) {
        let imgSrc = imgSrcs[j];
        imgSrc.src[j] = card[i].img;
    }

    ourProduct.appendChild(cloneItem);
    alert(card[i].img);
}

