// 버튼 이벤트
// 동작 1 - selected 배경 적용.
// selected가 있는 요소에 배경 지정.(css)
// 이전 버튼은 모든 버튼이 될 수 있으므로 이전버튼 변수 지정 필요.
// 이전버튼 : 최초에 첫번째 버튼 a로 할당.
// 이전 버튼의 a의 배경 해제. selected 클래스 remove.
// 버튼을 클릭했을 때 클릭한 a가 배경 지정. selected add.

// 모든 버튼에 대해 이벤트가 걸려야함. -> menuBtn 변수 필요.
// 모든 버튼에 접근 가능 하게 -> 배열로 접근 : 첫주소 알기, 인덱스 -> 반복문 사용.
// 다음에 누군가 클릭했을 때 이전 버튼은 지금 클릭한 버튼.
// 우변부터 대입.

// 동작 2 - contents 펼치기.
// 방법 1. a 타겟 속성 값 추출 = div id와 비교연산
// 방법 2. a 타겟 속성 값 추출 => div내에서 id 검색 > 방법 1보다 효율적.
// 프로그래밍 시 조건, 반복 최소화.

// contents를 미리 검색해서 찾기. -> 변수 지정.
// 버튼 클릭 시 href 값을 추출.
// contents 안에서 href 값을 추출한 값 검색.-> 해당하는 content 보이게 display : block

// 이전 요소 contents는 안보이게 변수 지정. -> 이전요소 href 값 추출
// 해당하는 content 안 보이게 display : none

// main이 버튼을 클릭하거나 또는 브라우저창 크기가 변할 때마다
// header 높이만큼 떨어진 위치에 main을 배치.
// 두 가지 상황에서 적용 -> 함수로 정의.
// header 높이 추출  -> header 지정.
// offestHeight 스크롤 포함한 헤더 높이 = main의 margin-top. > main 지정.

'use strict';

const header = document.querySelector('header'),
  menuBtn = header.querySelectorAll('.menu a'),
  contents = header.querySelector('.contents'),
  main = document.querySelector('main');

let beforeBtn = menuBtn[0];

// 메인 resize 위한 함수
function setMain() {
  main.style.marginTop = header.offsetHeight + 'px';
}

// 내용 보이기 함수 > 모듈화
function viewContent(self) {
  contents.querySelector(beforeBtn.getAttribute('href')).style.display = 'none';
  contents.querySelector(self.getAttribute('href')).style.display = 'block';
}

// 첫 내용이 보여야 하므로
viewContent(beforeBtn);
// 먼저 실행이 되어있어야함.
setMain();

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener('click', function () {
    beforeBtn.classList.remove('selected');
    this.classList.add('selected');

    viewContent(this);

    setMain();
    beforeBtn = this;
  });
}

window.addEventListener('resize', setMain);