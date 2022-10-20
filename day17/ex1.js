// 문제.
// 스크롤이 페이지의 3분의 1이 되면 top 버튼이 생김
// top에 호버하면 투명도가 1이 되고 너비가 늘어남. 커서도 바뀜.
// top은 창 위치에 고정됨.
// top을 클릭하면 페이지 상단으로 천천히 올라감.

// 이번 코드 컨셉: CSS에서 호버 안하고 스크립트로 이벤트 걸어서 호버 효과내기.


'use strict';

const scroll_top = document.querySelector('.scrollTop');
// 변수명 지정 시 유의.
// queryselector .이나 # 작성 유의.

// ======================================탑버튼 생성.
document.addEventListener('scroll', function () {
    if (window.scrollY >= (this.innerHeight / 3)) {
        // 전체문서 높이가 아닌 화면기준 높이 > 스크롤 높이가 아닌 화면이 기준! > innerheight 사용.
        scroll_top.classList.add('show');
    } else {
        scroll_top.classList.remove('show');
    }
});

// ====================================마우스 호버시 효과.
scroll_top.addEventListener('mouseenter', function () {
    this.classList.add('hover');
});

scroll_top.addEventListener('mouseleave', function () {
    this.classList.remove('hover');
});

// ====================================탑버튼 클릭시 상단.
scroll_top.addEventListener('click', function () {
    let stop = setInterval(() => {
        window.scrollBy(window.scrollX, -5);

        if (window.scrollY <= 0) { // 음수값이 나올리 없으므로 0이하.
            clearInterval(stop);
        }
    }, 5);
});