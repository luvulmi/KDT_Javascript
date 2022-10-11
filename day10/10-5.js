// 함수라는 객체를 변수에 할당해준 것.

// 변수로만 함수 호출 가능
// 함수 표현식은 디버깅, 재귀 호출 시 사용.

// 디버깅 필요시 익명 함수 사용.

// 함수 표현식은 호이스팅이 되지않음.

// 일반적으로 함수 일회성으로 사용 시 사용함.

'use strict';

const namingFunc = function identify() {      // Named function.  
    console.log('Naming func');
};

namingFunc();
// console.log(identify());     // 함수 표현식으로 정의되어 있는 함수명을 통한 직접 호출은 불가하지만,
console.log(namingFunc);        // 참조 변수를 통한 함수명(식별자) 확인은 가능.
console.log();


const sum = function (a, b, c) {              // Anonymous function.
    return a + b + c;
};
console.log(sum(1, 2, 3));
console.log();


const output = function () {
    console.log('출력테스트');
};
const call_output = function (test) {          // 함수의 형식 인수에는 객체나 배열 뿐만 아니라, 
    test();                                    // 함수의 참조도 전달 가능.
};
call_output(output);