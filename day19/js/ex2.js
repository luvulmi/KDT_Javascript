'use strict'

let slide_list = document.querySelector('.slide_list'),
    num = 0;

let imgAr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
]

for (let i = 0; i < imgAr.length; i++) {
    slide_list.innerHTML += '<li></li>';
}

let li = slide_list.querySelectorAll('li');

for (let i = 0; i < imgAr.length; i++) {
    li[i].style.background = `url(${imgAr[i]}) center/100% 100% no-repeat`;
}

let auto_slide = setInterval(() => {
    li[num].style.left = '100%';
    li[num].classList.remove('opacity');

    num = ++num % imgAr.length;

    li[num].style.left = '0px';
    li[num].classList.add('opacity');

}, 2000);