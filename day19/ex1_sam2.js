'use strict';

let main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.querySelectorAll('li'),
    btn = main_container.querySelectorAll('a');

let slide_idx = 0,                      // 현재 슬라이드 인덱스.
    slide_endIdx = li.length - 1,       // 슬라이드 인덱스 종료값.
    beforeEventTime = -new Date();

let stop;

/* =============================================================================================================== */

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

/* 
    자동슬라이드시에는 this 를 활용하고 버튼 실행시에는 e.target 활용.
*/
function activeSlide(e) {
    /* 
        setInterval 메서드의 this 는 window 가 되어 window 객체에 대하여
        target 필드는 컴파일 에러가 되므로 e.target 을 하기 구문전에 미리
        구할 수 없음에 주의.
    */
    if (executable()) {
        /* 
            비교 순서에 주의. 버튼이 클릭된 경우에는 this 와 e.target 이 모두 적용 가능하지만,
            자동슬라이드시에는 this 만 허용될 뿐, e.target 은 window 에 대하여 적용되지 않아
            this 가 window 인지 먼저 비교를 하여 e.target 이 실행되지 않도록 선비교.
        */
        if (this === window || e.target.closest('a') === btn[0] || e.target.closest('a') === btn[1]) {
            let move = this === window ? 1 : +e.target.closest('a').dataset.moveValue;

            slide_idx += move;
            slide_idx %= li.length;

            slide_list.style.left = `${-slide_idx * 100}%`;

            btn[0].classList.remove('hidden');
            btn[1].classList.remove('hidden');
            if (slide_idx <= 0) {
                btn[0].classList.add('hidden');
            } else if (slide_idx >= slide_endIdx) {
                btn[1].classList.add('hidden');
            }
        }
    }
}

main_container.addEventListener('click', activeSlide);

// ===============================================================================
/* 자동 슬라이드 */

/* 
    main_container 에 이벤트 지정시 버튼(btn)에도 자동슬라이드 이벤트가 걸리는
    문제가 발생되므로 slide_container 에 지정해야 함에 주의.
*/
let slide_container = main_container.querySelector('.slide_container');

slide_container.addEventListener('mouseenter', () => {
    stop = setInterval(activeSlide, 2000);
});

slide_container.addEventListener('mouseleave', () => {
    clearInterval(stop);
});