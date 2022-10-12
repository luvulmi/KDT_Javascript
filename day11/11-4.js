// 함수 선언 > 재활용 사용 시
// 함수 표현식 > 일회용 사용 시

'use strict';

// function agree() {
//     alert('개인정보 활용에 동의하셨습니다.');
// }

// function disagree() {
//     alert('개인정보 활용에 동의하지 않았습니다. 다시 확인부탁드립니다.');
// }

// function inputcheck1() {
//     if (confirm('개인정보 활용에 동의하십니까?')) {
//         agree();
//     } else {
//         disagree();
//     }
// }
// inputcheck1();

function inputcheck2(ok, no) {
    if (confirm('개인정보 활용에 동의하십니까?')) {
        ok();
    } else {
        no();
    }
}
inputcheck2(agree, disagree); // 함수 선언에 대한 참조 전달을 통한 콜백 호출!!

inputcheck2( // 함수 표현식에 대한 참조 전달을 통한 콜백 호출.
    function(){alert('개인정보 활용에 동의하셨습니다.');},
    function(){alert('개인정보 활용에 동의하지 않았습니다. 다시 확인부탁드립니다.');}
);