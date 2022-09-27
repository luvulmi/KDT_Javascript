'use strict';

// 1,3,5,7,9 ~ 20번째 항까지의 합.
// 회전 수 20번
// 규칙 : n = n + 2

// let tot = 0;
// let n = 1;

// for (let i = 0; i < 20; i++) {
//     tot += n;
//     n += 2;
// }

// console.log(tot);

// 1,0,1,1,2,3,
// 1,1,2,3,5,8,13 ~ 200번째 항까지의 합.
let tot = 0;
let n1 = 1, n2 = 0;
let now;

for (let i = 0; i < 100; i++) {
    now = n1 + n2;
    tot += now;
    n1 = n2;
    n2 = now;
}

console.log(tot);

