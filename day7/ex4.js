'use strict';

let value1 = 'a';
let value2 = 'd';

// 코드 작성 시 반복 회전 수 줄어들게 > 중복코드 최소화.
// 중복코드는 변수로 만들기.
let value1comp = value1 === undefined;
let value2comp = value2 === undefined;

// value1 || value2 === undefined vs value1 === undefined || value2 === undefined 두개 식은 다름!!
if (value1comp || value2comp) {
    if (value1comp) {
        value1 = 'initialize';
    }
    if (value2comp) { // val1, val2 모두 undeefined인 경우도 있으므로 if문 연속으로 작성.
        value2 = 'initialize';
    }
} else {
    console.log('모든 변수 초기화 됐지롱~');
}
console.log(`value1 = ${value1}, value2 = ${value2}`);