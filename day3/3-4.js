'use strict';

// // 예제 1
// // 숫자가 1부터 증가하며 찍혀야하므로 v변수 필요.
// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// // 예제 2
// // i = 1일 때 j =1 > j의 끝값은 i와 동일하므로 j <= i

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `)
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// // 예제 3
// // 열의 끝 값 > 행(i)와 연관지어서 규칙성 찾기
// // 6-i

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `)
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// // 예제 4
// // 열의 시작 값 = 행
// // 공백이 출력되어야 함
// // '&nbsp; &nbsp;' 공백 두개 출력되어야 숫자 자릿수 맞출 수 있음

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i > j) { // 행이 열보다 클 때 공백이 찍혀야함
//             document.write('&nbsp; &nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// // 예제 5 
// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i + j < 6) { // 행+열의 합이 6보다 작을 때 공백이 찍혀야함 
//             document.write('&nbsp; &nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// // 예제 6 
// 확장 ver.
// let n = +prompt('줄수');

// for (let i = 1, v = 1; i <= n; i++) {
//     for (let j = 1; j <= i + n - 1; j++) { // 2의 의미는 n - 1
//         if (i + j < n + 1) {
//             document.write('&nbsp; &nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// for (let i = 1, v = 1; i <= 3; i++) {
//     for (let j = 1; j <= i + 2; j++) {
//         if (i + j < 4) {
//             document.write('&nbsp; &nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// 예제 7

// 자바는 정수끼리만 나누므로 홀수만 입력받아야하나,
// 자바스크립트는 자동 변환이 되므로 짝수가 입력되어도 계산이 됨.

// 확장 ver.
// let n = +prompt('줄수');

// for (let i = 1, v = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n - i; j++) {
//         if (i > j) {
//             document.write('&nbsp; &nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// for (let i = 1, v = 1; i <= 3; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         if (i > j) { // 행이 더 클 때 공백이 찍혀야 함.
//             document.write('&nbsp; &nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++} `);
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');

// 예제 8
// 다이아몬드
// 중간값 형태로 대칭인 상태
// 관계분석 시 처음이랑 마지막으로 분석
let n, m;

m = (n + 1) / 2; // 중간값 

for (let i = 1, v = 1, st, ed; i <= n; i++) {
        if (i <= m) {
            st = 
        } else {
            
        }
    }
    document.write('<br>');
}
