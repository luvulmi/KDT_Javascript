'use strict';

let value;

value = 15;
value = null;
value = false;
value = 'string';          // Dynamic typing. > 타입 바꾸기 가능.

// console.log(value);
// console.log();


// console.log(!null);       // boolean 타입의 값이 대상이 되는 논리연산자(!)에 다른 타입의 값을
// console.log(!undefined);  // 대상으로 함으로써 자동으로 boolean 타입의 값으로 변환하여 연산.
// console.log(!NaN);
// console.log(!'');
// console.log(!0);
// console.log();


let n;
console.log(n);          // n은 명시적 선언을 하였지만, 초기화하지 않았으므로 undefined값으로 평가.
console.log();

function test1() {       // 명시적 반환을 하지 않는 함수도 undefined값을 반환.
  let n = 5;
}
function test2() {
  return 10;            // 함수의 경우 return을 명시하여야함.
}
console.log(test1());
console.log(test2());
console.log();