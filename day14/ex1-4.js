// ver4. 이미지가 자동으로 넘어가게.
// main_container 클릭 시 멈춤 > 다시 클릭 시 동작.

'use strict';

const img = document.querySelector('img'),
    nation_container = document.querySelector('.nation_container'),
    main_container = document.querySelector('#main_container');

let imgAr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
];

let slideNumber = 1, trigger = true;


for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

const nationBox = nation_container.getElementsByClassName('nationBox');
let tmp = nationBox[0]; // 직전요소


function changeNation() {
    img.setAttribute('src', imgAr[slideNumber]);
    // img.src = `./images/${this.textContent}.jpg`

    tmp.style.opacity = '.5';
    nationBox[slideNumber].style.opacity = '1';
    tmp = nationBox[slideNumber++];

    if (slideNumber === imgAr.length) slideNumber = 0;
}

nationBox[0].style.opacity = '1';

let intervalid = setInterval(changeNation, 1500);

main_container.addEventListener('click', function () {
    if (trigger) clearInterval(intervalid);
    else setInterval(changeNation, 1500);

    trigger = !trigger;
});