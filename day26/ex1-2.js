'use strict';

/* 
    < deltaY >

- wheel 이벤트에 종속되는 이벤트 객체로써 세로 스크롤 양을 정수값 형태로 반환.
  wheel 다운은 양수값을 wheel 업은 음수값을 반환. 크롬 기준 1 회 이벤트 발생 시마다
  각각 100, -100 을 반환하나 브라우저 별로 값의 크기는 상이함에 주의.
*/

/* wheel */
/* 
    < wheel 이벤트 > - 구버전 이벤트 : mousewheel( 현재는 사용되지 않음 )

- 마우스 휠을 조작했을 때의 이벤트.
  이벤트의 대상은 일반적으로 window 나 document 가 대상이 되며 스클롤이 생성되는
  다른 요소가 될 수도 있음.
*/
import executable from '../sumMoudle/test.js';

const page_container = document.querySelector('.page_container'),
    page = page_container.getElementsByClassName('page'),
    btn = page_container.getElementsByTagName('button');


// const [upBtn, downBtn] = document.getElementsByTagName('button');


let currentIdx = 0,
    nextIdx = 0,
    delay = 1500,
    closer = executable(delay);

function pageGo(ev, t1, t2) {
    let fg;

    if (ev === t1 && currentIdx > 0) {
        fg = true;
    } else if (ev === t2 && currentIdx < (page.length - 1)) {
        fg = false;
    } else return;

    if (closer()) {
        page[currentIdx].style.top = `${(fg ? 1 : -1) * 100}%`
        nextIdx = fg ? --nextIdx : ++nextIdx;
        page[nextIdx].style.top = 0;
        currentIdx = nextIdx;
    }
}

page_container.addEventListener('click', (e) => {
    let ev = e.target;
    pageGo(ev, btn[0], btn[1]);
});

window.addEventListener('wheel', (e) => {
    let ev = e.deltaY;
    pageGo(ev, -125, 125);
});