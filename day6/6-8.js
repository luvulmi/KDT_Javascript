// 둘이 기능적으로는 유사함. 
// 메서드 : 특정한 객체에 할당된 소속된 함수 / 함수: 독립적인 객체

// new Number > 참조형 객체.
// number > 변환된 값.
// 계산 시에는 자동 형변환.

'use strict';

console.log('string'.charAt(5));    // 원시 값에 대한 속성 또는 메서드로 접근시 자동으로 래퍼
console.log();                      // 객체 생성.
//                                  // charAt : 인수로 문자열에 대한 인덱스를 지정함으로써
//                                  //          해당 위치의 문자값 반환.


const n1 = new Number('5');   // Number객체의 참조 반환.
const n2 = Number('5');                           // 함수 호출을 통한 형변환된 값을 직접 반환.

console.log(n1);
console.log(n2);
console.log(n1 + 5);    // Number객체(n1)에 대한 산술 연산을 적용하여 자동 언박싱된 number로 
console.log(n2 + 5);    // 변환되어 연산 처리.
console.log();


console.log(n1 == 5);     // true
console.log(n2 == 5);     // true
console.log(n1 === 5);    // false
console.log(n2 === 5);    // true
console.log(typeof n1);   // object     // typeof 연산자 : typeof 연산자 우변에 타입 측정
//                                      //                 대상을 명시함으로써 문자열 형태로
//                                      //                 타입 정보를 반환.
console.log(typeof n2);   // number

if (typeof n1 === 'object') {       // typeof 연산자를 활용한 타입체크.
    console.log('타입 일치');
} else {
    console.log('타입 불일치');
}
console.log();


const n3 = new Number('a');   // 인수 값이 숫자 형태가 아닌 경우에는 NaN 저장.
const n4 = Number('a');       // 인수 값이 숫자 형태가 아닌 경우에는 NaN 반환.

console.log(n3);
console.log(n4);
console.log();
