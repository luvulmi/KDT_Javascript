
// /* 숫자 형태의 문자열에 대한 Number함수를 통한 숫자 타입으로 변환 연산. */
// const n5 = '8';
// const n6 = '10';

// // console.log(n5 + n6);
// // console.log(Number(n5) + n6);        // n5는 number타입으로 변환되었지만 문자열(n6)에 대한 
// // //                                   // + 연산자에 의해 결과적으로 문자열 결합 연산 적용.
// // console.log(Number(n5) + Number(n6));
// // console.log();


// // console.log(8 / 0);           // Infinity : 양의 무한대 - 0으로 나눌 경우.
// // console.log(-8 / 0);          // -Infinity : NEGATIVE_INFINITY(음의 무한대)
// // console.log('string' / 0);    // NaN : Not-a-Number - 문자열을 0으로 나눌 경우.
// // console.log();

// // 그지가튼거.
// /*
// //     < NaN의 특성과 타입 체크 시 주의점 >
// // */

// // console.log(NaN === NaN);   // 예외!! NaN은 다른 NaN과 일치하지 않는 특성. 
// // console.log(typeof NaN);    // NaN에 대한 직접적인 타입 체크 시 typeof 또한 연산자이므로 자동
// // //                          // number타입(0)으로 형변환됨에 주의. > number로 인식
// // console.log(typeof +'1234' === 'number');
// // console.log(typeof +'string' === 'number');     // 문자열에 부호(+) 연산을 적용하였으므로 결과는
// // //                                              // NaN으로 평가되지만 다시 typeof연산자를 적용함
// // //                                              // 으로써 0으로 변환 연산이 적용된 상태에서 타입
// // //                                              // 평가를 함으로써 비교 연산의 결과는 true가 반환.

// // console.log(isNaN(NaN));    // isNaN : 인수의 대상이 NaN인지의 여부를 평가하여 boolean값 반환.
// // console.log();


// console.log(Number(undefined));   // NaN        // undefined는 비교 연산 시 false로 평가되지만
// //                                              // number 형식으로 변환은 불가.
// console.log(Number(null));        // 0
// console.log(Number(true));        // 1
// console.log(Number(false));       // 0
// console.log(Number(false));       // 0
// console.log(Number('  123  '));   // 양쪽 끝의 공백을 제거한 후 변환된 number타입 값으로 반환.
// console.log(Number('  12 3  '));  // 양쪽 끝이 아닌 중간에 공백이나 숫자 형태가 아닌 값이 포함된
// //                                // 경우, 변환에 실패하여 NaN 반환.
// console.log(Number('  '));        // 공백이나 빈 문자열은 0으로 변환하여 반환.
// console.log();


// let n7;
// let n8 = null;
// let n9 = true;

// console.log(n7 + 5);      // n7은 초기화되지 않았으므로 undefined로 평가되며, undefined는 연산 시
// console.log(n8 + 5);      // 숫자형식으로 변환이 불가하므로 NaN 반환.
// console.log(n9 + 5);
// console.log(' ' + 5);     // 공백은 래퍼 객체를 통한 명시적 변환인 경우에는 0이 반환되지만,
// console.log();            // 이와 같이 연산 시에는 자동 형변환되지 않음.


// const n10 = 4;
// const n11 = 10;

// console.log(String(n10) + String(n11));   // String 래퍼 객체를 통한 문자열 변환.
// console.log(String(n7) + String(n8));     // String 래퍼 객체를 통한 문자열 변환.

