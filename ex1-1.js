// ver1. 확장성 고려x 이미지명 활용하여 만들기.
// ver2. 확장성 고려o 이미지 추가될 것을 고려.
// ver3. 확장성 고려o html body 변경.
// ver4. 이미지가 자동으로 넘어가게.

'use strict';

const img = document.querySelector('img');
const nationBox = document.getElementsByClassName('nationBox');

const images = ['2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg', '2-5.jpg'];

nationBox[0].classList.add('active');
// 첫부분에 검정 배경 있어야 하므로.

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        for (let j = 0; j < nationBox.length; j++) {
            if (i === j) { // 일치해야 움직이는 이유? 중첩 반복문 사용 이유?
                img.src = `../images/${images[i]}`; // i여야 하는 이유?
                this.classList.add('active'); // 눌렀을 때 검정 배경 적용 위함.
                // 여기서 this는 nationbox를 의미?
            } else {
                nationBox[j].classList.remove('active'); // j여야 하는 이유?
            }
        }
    });
}