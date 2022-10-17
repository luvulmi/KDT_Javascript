// ver1. 확장성 고려x 이미지명 활용하여 만들기.
// ver2. 확장성 고려o 이미지 추가될 것을 고려.
// ver3. 확장성 고려o html body 변경.
// ver4. 이미지가 자동으로 넘어가게.

// 직전 값 흐리게. 현재 값 진하게.
// 컨텐츠값 얻는 것!!
// 콜백함수 this 람다식에서는 빈 객체.
'use strict';

const container = document.getElementById('main_container'),
    nationBox = container.getElementsByClassName('nationBox'),
    img = container.querySelector('img');

let tmp = nationBox[0]; // 직전요소

function changeNation() {
    img.setAttribute('src', `./images/${this.textContent}.jpg`);
    // img.src = `./images/${this.textContent}.jpg`

    tmp.style.opacity = '.5';
    this.style.opacity = '1';
    tmp = this;
}

nationBox[0].style.opacity = '1';

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeNation); // (이벤트, 이벤트 핸들러 할당식.) // 이벤트 핸들러는 익명함수, 람다식.
}