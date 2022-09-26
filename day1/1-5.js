// 전역변수 : 다른 블럭에서도 사용가능
// 지역변수 : 해당 블럭 내에서만 사용가능 ex. for문

// 1 ~ 10
'use strict'

let tot = 0;

for (let i = 1; i <= 10; i++) {
    tot += i;
}
console.log(tot);

// 1 ~ 100

let tot = 200; // 1 + 99 + 100

for (let i = 2; i <= 98; i++) {
    tot += i;
}
console.log(tot);

