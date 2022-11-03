'use strict';

import executable from './executable.js';

const body = document.querySelector('body'),
  main_container = body.querySelector('.main_container'),
  slides = main_container.querySelectorAll('.slide_list li'),
  btn = main_container.querySelectorAll('.main_container a'),
  pager = body.querySelector('.pager');

// pager 버튼 > 인덱스 포함하여 생성 
for (let i = 0; i < slides.length; i++) {
  pager.innerHTML += `<a href="#"  class="pager_btn" data-direction="${i}"></a>`;
}

let preIdx = 0, currentIdx;

// pager 버튼 클릭 함수
pager.addEventListener('click', function (e) {
  let currentIdx = e.target.dataset.direction;

  if (preIdx > currentIdx) {
    slides[currentIdx].style.left = "-100%";
    slides[currentIdx].classList.remove('animated');
  }

  if (currentIdx < preIdx) {
    slides[currentIdx].style.left = "100%";
    slides[currentIdx].classList.remove('animated');
  }

  setTimeout(() => {
    slides[currentIdx].style.left = 0;
    slides[currentIdx].classList.add('animated');

    if (preIdx > currentIdx) {
      slides[preIdx].style.left = "100%";
      slides[preIdx].classList.add('animated');
    }

    if (currentIdx < preIdx) {
      slides[preIdx].style.left = "-100%";
      slides[preIdx].classList.add('animated');
    }
  }, 10);

  preIdx = currentIdx;



});



