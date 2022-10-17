// ver3. 확장성 고려o html body 변경.

'use strict';

const container = document.getElementById('main_container'),
    img = container.querySelector('img'),
    nation_container = container.querySelector('.nation_container');

let imgAr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
];

// innerHTML 이용하여 a 태그 생성
for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

const nationBox = nation_container.getElementsByClassName('nationBox');
let tmp = nationBox[0]; // 직전요소

function changeNation() {
    img.setAttribute('src', imgAr[this.textContent - 1]);  // textcontent - index = 1 연산으로 부호 연산 미필요.
    // img.src = `./images/${this.textContent}.jpg`

    tmp.style.opacity = '.5';
    this.style.opacity = '1';
    tmp = this;
}

nationBox[0].style.opacity = '1';

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeNation); // (이벤트, 이벤트 핸들러 할당식.) // 이벤트 핸들러는 익명함수, 람다식.
// }


// for ~ of문으로도 가능.
for (const nation of nationBox) {
    nation.addEventListener('click', changeNation);
}