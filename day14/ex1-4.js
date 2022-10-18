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

for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

// ========================================================================

const nationBox = nation_container.getElementsByClassName('nationBox');
let tmp = nationBox[0],
    trigger = true,
    slide_Interval;


function changeNation() {
    let img_num = tmp.textContent % imgAr.length;
    // index와 textcontent의 관계분석!!!
    img.setAttribute('src', imgAr[img_num]);
    // img.src = `./images/${this.textContent}.jpg`

    tmp.style.opacity = '.5';
    nationBox[img_num].style.opacity = '1';
    tmp = nationBox[img_num];
}

// =========================================================================
//  기능을 모듈화. > 재사용성 높이기.

function slide_start() {
    slide_Interval = setInterval(changeNation, 1000);
}

function slide_stop() {
    clearInterval(slide_Interval);
}

slide_start();

main_container.addEventListener('click', () => {
    if (trigger) slide_stop();
    else slide_start();

    trigger = !trigger;
});