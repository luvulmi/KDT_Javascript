'use strict';

const main_container = document.querySelector('.main_container'),
  slide_list = main_container.querySelector('.slide_list'),
  li = slide_list.querySelectorAll('li'),
  btn = main_container.querySelectorAll('a'),
  pager = document.querySelector('.pager');

let slide_idx = 0,                      // 현재 슬라이드 인덱스.
  slide_endIdx = img.length - 1,       // 슬라이드 인덱스 종료값.
  beforeTime = -new Date();


// ======================버튼 클릭 함수 및 이벤트====================
// 연속 클릭 방지 함수
// function executable() {
//   let currentTime = new Date();

//   if (currentTime - beforeTime > 1000) {
//     beforeTime = currentTime;

//     return true;
//   }
// }

// // 슬라이드 동작 함수
// function slideActive() {
//   slide_idx %= img.length;
//   li[slide_idx].style.left = `0px`;

//   btn[0].classList.remove('nonVisible');
//   btn[1].classList.remove('nonVisible');
//   if (slide_idx <= 0) {
//     btn[0].classList.add('nonVisible');
//   } else if (slide_idx >= slide_endIdx) {
//     btn[1].classList.add('nonVisible');
//   }
// }

// // 클릭 시 이벤트
// main_container.addEventListener('click', function (e) {
//   if (executable()) {
//     let eventOj = e.target.closest('a');

//     if (this.contains(eventOj)) {
//       slide_idx += +eventOj.dataset.direction;
//       slideActive();
//     }
//   }
// });

// // ============================자동 슬라이드======================
// let stop;

// slide_list.addEventListener('mouseenter', () => {
//   stop = setInterval((() => {
//       slide_idx++;
//       slideActive();
//   }), 2000);
// });

// slide_list.addEventListener('mouseleave', () => {
//   clearInterval(stop);
// });

// 클릭 이벤트 동작
// 1. pager 버튼 클릭 시 사진 넘어가기 > 해당하는 인덱스 이미지 left : 0
// 2. 클릭한 버튼 백그라운드 블랙
// 
// pager mouseenter 시 해당 인덱스 이미지 왼쪽에서 가져오기


// ==================pager 버튼 이벤트==================
// pager a버튼 생성 
for (let i = 0; i < li.length; i++) {
  pager.innerHTML += `<a href="#"></a>`;
}

// 변수 선언
const pager_btn = document.querySelectorAll('.pager a');
let pre_pager = pager_btn[0];

// 버튼 클릭 시 백그라운드 설정 함수
function pager_black(e) {
  let eventOj = e.target.closest('a');

  if (this.contains(eventOj)) {
    pre_pager.classList.remove('active');
    eventOj.classList.add('active');

    pre_pager = eventOj;
  }
}

pre_pager.classList.add('active');
pager.addEventListener('click', pager_black);



