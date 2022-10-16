'use strict';

const img = document.querySelector('img');
const nation_container = document.querySelector('.nation_container');
const nationBox = document.getElementsByClassName('nationBox');
const main_container = document.querySelector('#main_container');

const imageCount = 8;
const images = new Array(imageCount);

let indexNumber = 1, trigger = true;
let intervalid;

function imageSlide() {
    return setInterval(() => {
        img.src = `../images/${images[indexNumber]}`;

        for (let j = 0; j < nationBox.length; j++) {
            nationBox[j].classList.remove('active');
        }
        nationBox[indexNumber].classList.add('active');
        indexNumber++;

        if (indexNumber > imageCount - 1) indexNumber = 0; // -1 이유?
    }, 1500);
}

for (let i = 0; i < images.length; i++) {
    images[i] = `2-${i + 1}.jpg`;
}

for (let i = 0; i < images.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

nationBox[0].classList.add('active');

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', function () {
        for (let j = 0; j < nationBox.length; j++) {
            if (i === j) {
                img.src = `../images/${images[i]}`;
                this.classList.add('active');
                // 링크를 클릭했을 때 인터벌을 위한 인덱스에 링크의 인덱스를 할당.
                // 슬라이드가 진행중일 때 다른 링크를 클릭하면 슬라이드가 멈추는데,
                // 이때 클릭한 링크에서 슬라이드를 재시작할 수 있도록 만들기 위함.
                indexNumber = i;
            } else {
                nationBox[j].classList.remove('active');
            }
        }
    });
}

intervalid = imageSlide();

main_container.addEventListener('click', function () {
    if (trigger) {
        clearInterval(intervalid);
        trigger = !trigger;
    } else {
        clearInterval(intervalid);
        intervalid = imageSlide();
        trigger = !trigger;
    }
});