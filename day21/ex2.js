// li 클릭 시 
// contents[e] e = a 타겟값. contente div가 display:block
// 백그라운드 블랙.
// 타겟 이동.
// 이전요소 변수 = 첫번째 a

'use strict';

const header = document.querySelector('header'), 
  menu_list = header.querySelectorAll('.menu a'),
  contents = header.querySelectorAll('.contents div'),
  selected = header.querySelector('.selected');

let first_c = menu_list[0];


// 내용 보이기 함수
function showContent(n){
    contents
    contents[n].style.display = 'block';
}

// selected 이동 함수

// 클릭 이벤트
for (let li of menu_list) {
  li.addEventListener('click', function(){
    contents.style.display = 'none';
    this.classList.add('selected');
  });
}