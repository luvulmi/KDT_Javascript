// 이미지는 화면 중앙에.
// 호버시 오퍼시티 1 효과.
// 클릭시 이미지 넘어감.
// 처음과 끝 부분에 버튼 사라짐.

'use strict';

const container = document.querySelector('.main_container'),
    img_container = document.querySelector('.img_container'),
    Btn = document.querySelectorAll('img.Btn');

let Cnt = 0;

container.addEventListener('click', function (e) {
    if (e.target === Btn[0]) {
        Cnt--;
        img_container.style.left = `-${Cnt * 100}%`;
    }

    if (e.target === Btn[1]) {
        Cnt++;
        img_container.style.left = `-${Cnt * 100}%`;
    }

    if (Cnt >= 1) { // 처음 클릭했을 때 왼쪽 버튼 나타나기.
        Btn[0].classList.remove('hide');
    } else {
        Btn[0].classList.add('hide');
    }

    if (Cnt === 4) { // 마지막 클릭했을 때 오른쪽 버튼 없애기.
        Btn[1].classList.add('hide');
    } else {
        Btn[1].classList.remove('hide');
    }
});