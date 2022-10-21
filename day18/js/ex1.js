'use strict';

const container = document.querySelector('.main_container'),
    img_container = container.querySelector('.img_container'),
    Btn = container.querySelectorAll('a'),
    list = img_container.getElementsByTagName('li');

let Cnt = 0,
    before = 0, after,
    n;

//==========================버튼 생성/숨김 함수 생성
function slide_Btn() {
    if (Cnt <= 0) {
        Btn[0].classList.add('hide');
    } else {
        Btn[0].classList.remove('hide');
    }

    if (Cnt === list.length - 1) {
        Btn[1].classList.add('hide');
    } else {
        Btn[1].classList.remove('hide');
    }
}

//=========================경과시간 함수 생성
function slide_time(delay) {
    after = new Date();
    if (after - before > delay) {
        return true;
    }
}

//========================이미지 이동 함수 생성
function slide_img(num) {
    slide_Btn();
    img_container.style.left = `-${num * 100}%`;
}

//=========================슬라이드 동작 호출
container.addEventListener('click', function (e) {
    const aTarget = e.target.closest('a');
    // 이름은 알아서 바꾸셈
    // closest 메소드는 target이 지정한 선택자와 일치할 때까지 자기 자신을 포함해서 계속 상위를 순회함.
    // 이 코드에서 e.target은 이미지가 클릭되는데, 위 메소드를 사용하면 a로 지정해줄 수 있다.

    if (this.contains(aTarget)) {
        // aTarget에 해당하는 놈만 걸림
        if (slide_time(1000)) {
            e.preventDefault();
            if (e.target.parentNode === Btn[0]) {
                n = --Cnt;
            } else {
                n = ++Cnt;
            }
            slide_img(n);
            before = after;
        }
    }
});