
'use strict';

function spreadAr(...a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log('=====================');
}

spreadAr(1, 2, 3);
spreadAr(1, 2, 3, 4, 5);
spreadAr(1, '가', 2, '나', 3, '다');

let ar1 = [1, 2, 3];
let ar2 = [1, 2, 3];

let ar3 = [ar1, ar2];

console.log(ar3); // 배열의 참조 전달을 통한 2차원 배열 생성.


let a1 = [1, 2, 3];
let a2 = [1, 2, 3];


let a3 = [...a1, ...a2];

console.log(a3);

a2[2] = 4;

console.log(a3);
console.log(a2);

let [e1, e2] = ['요소1', '요소2'];

console.log(e1);
console.log(e2);

let [el1, el2, el3, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(el1);
console.log(el2);
console.log(el3);
console.log(rest);
