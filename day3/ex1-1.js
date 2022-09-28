'use strict';

// 조건: n1, n2를 큰 수 부터 작은 수까지 누적합으로 구하기.

let n1, n2;
let tot = 0;

let big, small;

n1 = +prompt('정수1:');
n2 = +prompt('정수2:');

// n1 > n2 일 때 n1 부터 n2 누적합
// n2 > n1 일 때 n2 부터 n1 누적합
// 변수 큰 수, 작은 수 더 필요

if (n1 > n2) {
    // n1 = big;
    // n2 = small;
    big = n1;
    small = n2;
} else {
    // n1 = small;
    // n2 = big;
    big = n2;
    small = n1;
}

for (let i = small; i <= big; i++) {
    tot += i;
}

alert(`${small}부터 ${big}까지의 합 : ${tot}`);



