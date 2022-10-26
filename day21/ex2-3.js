'use strict'

const header = document.querySelector('header'),
  menu = document.querySelector('.menu'),
  main = document.querySelector('main'),
  ali = menu.getElementsByTagName('a'),
  contents = document.querySelector('.contents'),
  con1 = document.getElementById('content1');

let beforeS = ali[0];
let beforeD = con1



// ============================함수정의

function addselect(e) {
  let aaa = e.target;
  // ==============타겟의 태그링크추출후 #을 제거함
  // let divID = e.target.getAttribute('href').split('#')[1];
  // ==============결과물로 검색
  // let newD = document.getElementById(`${divID}`);
  let newD = contents.querySelector(e.target.getAttribute('href'));

  if (!(newD.classList.contains('display'))) {
    beforeS.classList.remove('selected');
    aaa.classList.add('selected');
    beforeS = aaa;

    newD.classList.add('display');
    beforeD.classList.remove('display');
    beforeD = newD;
  }
}
// =========================리사이즈함수
function resize() {
  main.style.marginTop = `${header.offsetHeight}px`;
}
// ===================먼저 실행
con1.classList.add('display');
resize();
//=====================리사이즈 이벤트
window.addEventListener('resize', resize);
// =====================리사이즈 후순위실행
menu.addEventListener('click', function (e) {
  addselect(e);
  resize();
})