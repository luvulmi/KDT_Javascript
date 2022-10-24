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
    e.target.closest('a'); 
    
    if (executable()) {
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

let slide_container = main_container.querySelector('.slide_container');

slide_container.addEventListener('mouseenter', () => {
    stop = setInterval(activeSlide, 2000);
});

slide_container.addEventListener('mouseleave', () => {
    clearInterval(stop);
});