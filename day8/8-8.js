/*
    < typeof 연산자 >

- 피연산자의 타입을 문자열로 반환.

형식    :    typeof (피연산자)

※ 괄호는 생략가능하나 연산순위를 감안하여 표현하는게 바람직.

*/
'use strict';

let n;
function test() { }

console.log(typeof 1);
console.log(typeof 5.5);
console.log(typeof "test");
console.log(typeof "");
console.log("------------------------")

console.log(typeof true);
console.log(typeof NaN);    // number
console.log(typeof null);               // object : null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만,
console.log(typeof undefined);          //          하위 호환성을 유지하기 위해 object로 처리. 언어 자체의 오류이므로
console.log("------------------------") //          null이 객체가 아님에 유의.

console.log(typeof n);
console.log(typeof test);
console.log("------------------------")

console.log(typeof 37 === 'number');        // typeof연산자가 비교연산자나 논리연산자에 비해
console.log(typeof (37 === 'number'));      // 우선순위가 높음에 주의.
console.log(typeof 'number' && 37);
console.log(typeof ('number' && 37));