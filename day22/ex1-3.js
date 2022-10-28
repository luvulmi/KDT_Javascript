'use strict';

const header = document.querySelector('header'),
  menu = header.querySelector('.menu'),
  Btn = menu.querySelectorAll('.menu a'),
  contents = header.querySelector('.contents'),
  main = document.querySelector('main');

let e_content;
let beforeBtn = Btn[0],
  before_content = beforeBtn.getAttribute('href');

// 버튼 클릭 시 진행 함수
function Btn_click(e) {
  if (e.target.hasAttribute('href')) {
    e_content = e.target.getAttribute('href');

    beforeBtn.classList.remove('selected');
    e.target.classList.add('selected');

    contents.querySelector(before_content).style.display = "none";
    contents.querySelector(e_content).style.display = "block";

    beforeBtn = e.target;
    before_content = e_content;
  }
}

// 리사이즈 함수
function resize() {
  main.style.marginTop = header.offsetHeight + 'px';
}

// 메뉴 클릭 시 실행할 이벤트
menu.addEventListener('click', function(e){
  Btn_click(e);
  resize();
});

// 리사이즈 이벤트
resize(); // 먼저 실행.
window.addEventListener('resize', resize);
