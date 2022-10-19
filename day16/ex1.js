// 예제1
// 브라우저 전체 높이 3분의 1 스크롤 시 탑버튼 생성
// 탑버튼 호버시 오퍼서티 1. 너비 늘어남. 커서모양 포인터
// 탑버튼 클릭시 상단으로 감. 탑버튼 사라짐.

'use strict';

let scrollTop = document.querySelector('scrollTop'),
    body = document.querySelector('body'),
    actionHeight = screen.height / 3,
    posY;

document.addEventListener('scroll', () => {
    posY = parseInt(window.scrollY);

    if (posY > actionHeight) scrollTop.style.display = 'block';
    else scrollTop.style.display = 'none';

});

scrollTop.addEventListener('click', () => {
    let upper = setInterval(function () {
        posY = parseInt(window.scrollY);
        window.scroll(0, posY -= 5);

        if (posY < 0) clearInterval(upper);
    }, 5);
});

// function scrollUp() {
//     let upper = setInterval(function () {
//         posY = parseInt(window.scrollY);
//         if (posY < 0) {
//             window.scroll(0, posY -= 5);
//         } else {
//             clearInterval(upper);
//         }
//     }, 10);
// }