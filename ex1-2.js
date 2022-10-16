'use strict';

const img = document.querySelector('img');
const nation_container = document.querySelector('.nation_container');
const nationBox = document.getElementsByClassName('nationBox');

const imageCount = 7;
const images = new Array(imageCount); // 입력한 이미지 개수만큼 배열 생성.

// 배열에 이미지 개수대로 이미지 이름 넣음.
for (let i = 0; i < images.length; i++) {
    images[i] = `2-${i + 1}.jpg`;
}

for (let i = 6; i < images.length; i++) { // 만들어진 배열 인덱스만큼 a링크 추가.
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i}">${i}</a>`;
}

nationBox[0].classList.add('active');

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        for (let j = 0; j < nationBox.length; j++) {
            if (i === j) {
                img.src = `../images/${images[i]}`;
                this.classList.add('active');
            } else {
                nationBox[j].classList.remove('active');
            }
        }
    });
}