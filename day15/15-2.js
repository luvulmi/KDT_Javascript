'use strict';

let li = document.getElementsByTagName('li');

window.addEventListener('load', () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'yellow';
    }
});

let scrollBox = document.querySelector('.scrollBox');

let stop;
document.addEventListener('scroll', () => {
    let posX = parseInt(window.scrollX),
        posY = parseInt(window.scrollY);
    // let posX = Math.trunc(window.scrollX),
    //     posY = Math.trunc(window.scrollY);

    console.log(posX, posY);

    scrollBox.style.display = 'block';
    scrollBox.innerHTML = `스크롤량<br>(x = ${[posX]}, y = ${posY})`;

    if (posX > 500 || posY > 500) {

        /* 
           < scroll, scrollTo >
  
        - window 객체에 소속된 함수로 문서의 지정된 좌표로 스크롤.
          scroll, scrollTo 은 사용 방법과 동작이 사실상 동일.
        */
        window.scroll(0, 0);
        // window.scrollTo(0, 0);
    }

    // // 예제1. 밑의 조건 합치기.

    // let stopTimeout = setInterval(() => {
    //     if (posX > 500) { // 조건이 다르고 실행 결과도 다르므로 조건 합치기 불가.
    //         window.scrollBy(-5, posY);
    //         posX = parseInt(window.scrollX);
    //     }
    //     if (posY > 500) {
    //         window.scrollBy(posX, -5);
    //         posY = parseInt(window.scrollY);
    //     }
    //     if (posX <= 0 || posY <= 0) {
    //         clearInterval(stopTimeout);
    //     }
    // }, 5);

    // 기능이 같다면 함수로 묶기.
    // 기능이 다르다면 객체로 묶어서 전달.
    function scrollBack(scBack) {
        let stopTimeout = setInterval(() => {
            scBack(); // 실행문. 호출하는 시점에서 다른 동작만 객체화 시키기.

            if (posX < 0 || posY < 0) {     // 0을 포함해서 비교하면 안되므로 미만으로 조건 형성.           
                clearInterval(stopTimeout); // 조건은 다르나 결과는 동일하므로 조건 결합 가능.
            }
        }, 5);
    }

    if (posX > 500) {
        scrollBack(() => {
            window.scroll(posX -= 5, posY); // 함수에 실행시킬 동작 전달. > 람다식 이용!
        })
    }

    if (posY > 500) {
        scrollBack(() => {
            window.scroll(posX, posY -= 5);
        })
    }

    /* 
          상기와 같이 문서가 최초 위치로 과정없이 바로 이동하는 것을 방지
          하기 위해 문서의 백스크롤 과정을 0.005 초 마다 -5px 씩 이동하도록
          setInterval 함수를 활용하여 구현.
       */
    if (posX > 500) {
        let stopTimeout = setInterval(() => {
            window.scroll(posX -= 5, posY);

            if (posX <= 0) {                // posX 값이 감소 연산으로 직접 계속
                clearInterval(stopTimeout); // 변경되므로 미만(<) 으로 비교해도 무방.
            }
        }, 5);
    }

    if (posY > 500) {
        let stopTimeout = setInterval(() => {

            /* 
                < scrollBy >

            - scroll, scrollTo 는 지정된 절대적 좌표로 스크롤되는 반면,
              scrollBy 는 x, y 에 대한 스크롤량을 지정함으로써 현재 위치를
              기준으로한 상대적 스크롤 이동 발생.
            */
            window.scrollBy(posX, -5);
            console.log(posX, posY);

            /* 
                scrollBy 에 의해 스크롤량은 감소하지만 이동한 스크롤 위치는
                측정이 되지않아 clearInterval 을 실행하기 위한 하기의 조건식
                평가가 되지 않으므로 scrollBy 로 이동후 posY 재조사 필요.
            */
            posY = parseInt(window.scrollY);

            if (posY <= 0) {                // posY 값이 직접 감소 연산을 하는 것이 아닌
                clearInterval(stopTimeout); // window.scrollY 조사로 인한 재초기화가 되므로
            }                               // 0 보다 작은 음수가 발생될 수 없으므로 미만(<)
        }, 5);                              // 으로 비교 불가함에 주의.
    }


    /*
       scrollBox 가 5초 뒤에 화면에 보이지 않도록 설정.
    */
    // clearTimeout(stop);

    // stop = setTimeout(() => {
    //     scrollBox.style.display = 'none';
    // }, 5000);
});