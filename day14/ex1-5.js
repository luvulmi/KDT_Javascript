// ver4. 이미지가 자동으로 넘어가게.
// main_container 클릭 시 멈춤 > 다시 클릭 시 동작.

'use strict';

const img = document.querySelector('img'),
    nation_container = document.querySelector('.nation_container'),
    main_container = document.querySelector('#main_container');

let imgAr = [
    './images/m1.png',
    './images/m2.png',
    './images/m3.png',
    './images/m4.png',
    './images/m5.png',
    './images/m6.png',
    './images/m7.png',
    './images/m8.png',
    './images/m9.png',
    './images/m10.png',
    './images/m11.png',
    './images/m12.png',
    './images/m13.png',
    './images/m14.png',
    './images/m15.png',
    './images/m16.png',
];

let slideNumber = 1, trigger = true;


for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

const nationBox = nation_container.getElementsByClassName('nationBox');
let tmp = nationBox[0]; // 직전요소


function changeNation() {
    img.setAttribute('src', imgAr[slideNumber]);  // textcontent - index = 1 연산으로 부호 연산 미필요.
    // img.src = `./images/${this.textContent}.jpg`

    tmp.style.opacity = '.5';
    nationBox[slideNumber].style.opacity = '1';
    tmp = nationBox[slideNumber++];

    if (slideNumber === imgAr.length) slideNumber = 0;
}

nationBox[0].style.opacity = '1';

let intervalid = setInterval(changeNation, 10);

main_container.addEventListener('click', function () {
    if (trigger) clearInterval(intervalid);
    else intervalid = setInterval(changeNation, 10);

    trigger = !trigger;
});