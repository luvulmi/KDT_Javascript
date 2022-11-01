'use strict';

const body = document.querySelector('body'),
  main_container = document.querySelector('.main_container'),
  slide_list = main_container.querySelector('.slide_list'),
  [btn_back, btn_foward] = main_container.getElementsByTagName('a'),
  img_li = main_container.getElementsByTagName('li'),
  pager = document.querySelector('.pager');

let count = 0, bf_time = -new Date(), af_time, slide_show;

// 페이져 버튼 생성 및 변수 선언
for (let i = 0; i < img_li.length; i++) {
  pager.appendChild(document.createElement('a')).setAttribute('href', '#')
  pager.children[i].setAttribute('data-count', `${i}`);
}

const pager_btn = pager.getElementsByTagName('a');

// 중복 이벤트 발생 제한
function slide_delay(delay) {
  af_time = new Date();
  if (af_time - bf_time > delay) {
    bf_time = af_time;
    return true;
  }
}

//카운트 변수 선언
let bf_Idx = 0,
  slide_Idx = 0,
  af_Idx;

//버튼 클릭 이벤트
body.addEventListener('click', function (event) {
  event.preventDefault();
  if (slide_delay(2000)) {
    //페이저 버튼 이벤트
    if (event.target.hasAttribute('href')) {
      slide_Idx = +event.target.dataset.count;
      if (slide_Idx !== bf_Idx) {
        move_img();
        pager_btn_click();
        slide_btn_show();
      }
      bf_Idx = slide_Idx;
    }
    //슬라이드 버튼 이벤트
    if (event.target.parentNode.hasAttribute('href')) {
      if (+event.target.parentNode.dataset.direction === 1) {
        slide_Idx = (bf_Idx + 1) % img_li.length;
        af_Idx = (slide_Idx + 1) % img_li.length;
      } else {
        slide_Idx = (bf_Idx - 1) % img_li.length;
        if (slide_Idx > 0) {
          af_Idx = (slide_Idx - 1) % img_li.length;
        }
      }
      move_img();
      next_img();
      pager_btn_click();
      slide_btn_show();
      bf_Idx = slide_Idx;
    }
  }
});

//이미지 이동 함수
function move_img() {
  img_li[slide_Idx].classList.add('delay_img');
  img_li[bf_Idx].classList.add('delay_img');
  img_li[slide_Idx].style.left = "0%";
  if (bf_Idx < slide_Idx) {
    img_li[bf_Idx].style.left = "-100%";
  } else {
    img_li[bf_Idx].style.left = "100%";
  }
}

//슬라이드 버튼 이벤트 함수
function slide_btn_show() {
  if (slide_Idx >= img_li.length - 1) {
    btn_foward.classList.add('nonVisible');
  } else {
    btn_foward.classList.remove('nonVisible');
  }

  if (slide_Idx > 0) {
    btn_back.classList.remove('nonVisible');
  } else {
    btn_back.classList.add('nonVisible');
  }
}

//페이저 버튼 이펙트
function pager_btn_click() {
  pager_btn[slide_Idx].style.backgroundColor = "rgb(49, 47, 47)";
  if (slide_Idx !== bf_Idx) {
    pager_btn[bf_Idx].style.backgroundColor = "darkgray";
  }
}

//호버 이벤트
body.addEventListener('mouseover', function (event) {
  event.preventDefault();
  if (event.target.hasAttribute('href')) {
    af_Idx = +event.target.dataset.count;
    next_img();
  }
  console.log(event.target.parentNode);
  if (event.target.parentNode.hasAttribute('href')) {
    af_Idx = slide_Idx + +event.target.parentNode.dataset.direction;
    af_Idx = af_Idx % img_li.length;
    next_img();
  }
});

//다음 이미지 감지 함수
function next_img() {
  if (af_Idx !== slide_Idx) {
    img_li[af_Idx].classList.remove('delay_img');
    if (af_Idx > slide_Idx) {
      img_li[af_Idx].style.left = "100%";
    } else {
      img_li[af_Idx].style.left = "-100%";
    }
  }
}

//슬라이드 쇼 이벤트
slide_list.addEventListener('mouseenter', () => {
  if (slide_Idx === 4) {
    img_li[0].style.left = "100%";
  }
  slide_show = setInterval(slide_img, 2000);
});

slide_list.addEventListener('mouseleave', () => {
  setTimeout(() => clearInterval(slide_show), 0);
});

function slide_img() {
  console.log(slide_Idx);
  slide_Idx = ++slide_Idx % img_li.length;
  img_li[(slide_Idx + 1) % img_li.length].classList.remove('delay_img');
  img_li[(slide_Idx + 1) % img_li.length].style.left = "100%";
  img_li[slide_Idx].classList.add('delay_img');
  img_li[bf_Idx].classList.add('delay_img');
  img_li[slide_Idx].style.left = "0%";
  img_li[bf_Idx].style.left = "-100%";
  pager_btn_click();
  slide_btn_show();
  bf_Idx = slide_Idx;
}