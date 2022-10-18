'use strict';

const container = document.getElementById('main_container'),
    nationBox = container.getElementsByClassName('nationBox'),
    img = container.querySelector('img');

let tmp = nationBox[0]; // 직전요소
let imgAr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
]

function changeNation() {
    img.setAttribute('src', imgAr[this.textContent - 1]);  // textcontent - index = 1 연산으로 부호 연산 미필요.
    // img.src = `./images/${this.textContent}.jpg`

    tmp.style.opacity = '.5';
    this.style.opacity = '1';
    tmp = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeNation); // (이벤트, 이벤트 핸들러 할당식.) // 이벤트 핸들러는 익명함수, 람다식.
}