/*==================================   our-products js    ============================================*/

let card = [
    {
        cardProduct: [{ class: 'card-tightvnc', }],
        img: [{ src: 'logo/tightvnc-logo-new-168x168.png', alt: 'tightvnc logo', }],
        title: [{ text: 'TightVNC v.2', }],
        description: [{ text: 'Famous remote desktop tool, 100% free and Open Source', }],
        middleText: [{ text: 'Windows XP & above | Java Viewer', }],
        button: [{ class: 'button-tightvnc', url: '/download.php', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/tightvnc/rcolumn');", }],
        buttonText: [{ text: 'Download your free copy', }],
    },
    {
        cardProduct: [{ class: 'card-sourcecode', }],
        img: [{ src: 'logo/source-code-logo-new-168x168.png', alt: 'source code logo', }],
        title: [{ text: 'Source Code', }],
        description: [{ text: 'Get commercial licenses for TightVNC and related software', }],
        middleText: [{ text: 'Windows XP & above | Unix/Linux | macOS', }],
        button: [{ class: 'button-sourcecode', url: '/download.php', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/sourcecode/rcolumn');", }],
        buttonText: [{ text: 'Learn more & request prices', }],
    },
    {
        cardProduct: [{ class: 'card-remotecoresdk', }],
        img: [{ src: 'logo/remote-core-SDK-logo-new-168x168.png', alt: 'remote ripple logo', }],
        title: [{ text: 'Remote Core SDK', }],
        description: [{ text: 'Integrate remote desktop functions into your software', }],
        middleText: [{ text: '.NET | iOS | macOS | Android | Linux+more', }],
        button: [{ class: 'button-remotecoresdk', url: 'https://remotecoresdk.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/remotecoresdk/rcolumn');", }],
        buttonText: [{ text: 'Learn more & request a demo', }],
    },
    {
        cardProduct: [{ class: 'card-mightyviewer', }],
        img: [{ src: 'logo/mightyviewer-logo-new-168x168.png', alt: 'mightyviewer logo', }],
        title: [{ text: 'MightyViewer' }],
        description: [{ text: 'Monitor many remote desktops in real time on one screen', }],
        middleText: [{ text: 'All modern versions of Windows', }],
        button: [{ class: 'button-mightyviewer', url: 'https://mightyviewer.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/mightyviewer/rcolumn');", }],
        buttonText: [{ text: 'Learn more & install', }],
    },
    {
        cardProduct: [{ class: 'card-remoteripple', }],
        img: [{ src: 'logo/remote-ripple-logo-new-168x168.png', alt: 'remote ripple logo', }],
        title: [{ text: 'Remote Ripple', }],
        description: [{ text: 'View and control VNC remote desktops from any device', }],
        middleText: [{ text: 'Windows | iOS | iPadOS | macOS | Android', }],
        button: [{ class: 'button-remoteripple', url: 'https://remoteripple.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/remoteripple/rcolumn');", }],
        buttonText: [{ text: 'Learn more & install', }],
    },
    {
        cardProduct: [{ class: 'card-tightprojector', }],
        img: [{ src: 'logo/tightprojector-logo-new-168x168.png', alt: 'tightprojector logo', }],
        title: [{ text: 'TightProjector', }],
        description: [{ text: 'Broadcast your live desktop to the whole local-area network', }],
        middleText: [{ text: 'Windows XP & above | Java Viewer', }],
        button: [{ class: 'button-tightprojector', url: 'https://tightprojector.com', target: '_blank', onclick: "javascript: pageTracker._trackPageview('/sites/tightprojector/rcolumn');", }],
        buttonText: [{ text: 'Learn more & install', }],
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
        //img[j].style.display = addOptions(card[i].img, 'hidden');
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
