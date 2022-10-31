'use strict';

const main_container = document.querySelector('.main_container'),
  slide_list = main_container.querySelector('.slide_list'),
  li = slide_list.querySelectorAll('li'),
  btn = main_container.querySelectorAll('a'),
  pager = document.querySelector('.pager');

// pager a태그 추가
for (let i = 0; i < li.length; i++) {
  pager.innerHTML += `<a href="#" class="pagerBtn" data-count="${i}"></a>`;
}

// a태그 변수 선언
const pagerBtn = pager.querySelectorAll('a');

// 좌우버튼 사용자 속성 선언
let backBtn = btn[0].dataset.direction, // -1에 해당
  fowardBtn = btn[1].dataset.direction; // 1에 해당

let pagerBtns,
  beforeBtn = pagerBtn[0],
  overcount;

pager.addEventListener('mouseover', (e) => {
  let overBtn = e.target;
  overcount = overBtn.dataset.count; // 해당 버튼 인덱스

  if (overBtn.tagName === 'A') { // 해당 버튼이 a태그라면
    if (overcount > beforeBtn.dataset.count) { // 해당버튼 인덱스가 이전 버튼 인덱스보다 크다면
      li[overcount].style.left = `${fowardBtn * 100}%`; // li 해당버튼 인덱스 왼쪽으로 100% 이동
      li[overcount].style.visibility = `hidden`;
    } else if (overcount < beforeBtn.dataset.count) {
      li[overcount].style.left = `${backBtn * 100}%`; // 왼쪽으로 -100% 이동
      li[overcount].style.visibility = `hidden`;
    }
  }
});

let beforeli = li[0],
  beforeCount;

pager.addEventListener('click', (e) => {
  let clickBtns = e.target; // 클릭한 버튼
  beforeCount = clickBtns.dataset.count; // 클릭한 버튼 인덱스
  if (clickBtns.tagName === 'A') {
    if (beforeCount > beforeBtn.dataset.count) {
      beforeli.style.left = `${backBtn * 100}%`;
    } else if (beforeCount < beforeBtn.dataset.count) {
      beforeli.style.left = `${fowardBtn * 100}%`;
    }
    beforeBtn.style.backgroundColor = "lightgray";
    clickBtns.style.backgroundColor = "black";
    li[count].style.visibility = "hidden";

    beforeBtn = clickBtns;
    beforeli = li[beforeCount];

    li[count].style.left = 0;
    li[count].style.visibility = "visible";
  }
});