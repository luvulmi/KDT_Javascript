'use strict'

const header = document.querySelector('header'),
  menu = header.querySelector('.menu'),
  Btn = menu.getElementsByTagName('a'),
  contents = header.querySelector('.contents'),
  content1 = document.getElementById('content1'), //ID는 document로만 검색.
  main = document.querySelector('main');

let pre_Btn = Btn[0],
  pre_content = content1;

// 버튼 클릭 시 함수
function Btn_click(e) {
  let current_content = contents.querySelector(e.target.getAttribute('href'));
  // 상단바 해당되는 내용 추출 변수

  if (e.target.hasAttribute('href')) {
    pre_Btn.classList.remove('selected');
    e.target.classList.add('selected');

    pre_content.style.display = "none";
    current_content.style.display = "block";

    pre_Btn = e.target;
    pre_content = current_content;
  }
}

// 리사이즈 함수
function resize() {
  main.style.marginTop = `${header.offsetHeight}px`;
}

// 먼저 실행
resize();
content1.style.display = "block";

// 메뉴 클릭 이벤트
menu.addEventListener('click', function (e) {
  Btn_click(e);
  resize();
})

// 리사이즈 이벤트
window.addEventListener('resize', resize);


// 새로 고침 시 스크롤 상단으로 올리기 
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
}
