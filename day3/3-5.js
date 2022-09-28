
'use strict';

// a는 엄밀히 말하면 배열이 아님 배열을 나열한 것
// index 가 필요 > 변수 필요 > 반복문 필요

// 현재대상값 > 인덱스값 a[i]

// const a = [70, 60, 55, 90, 80];
// let min = 100, max = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) max = a[i];
//     if (a[i] < min) min = a[i];
// }

// console.log(max + ' ' + min);

const a = [70, 60, 55, 90, 80];
let min = a[0], max = a[0];

for (let i = 1; i < a.length; i++) {
    if (a[i] > max) max = a[i];
    if (a[i] < min) min = a[i];
}

console.log(max + ' ' + min);
