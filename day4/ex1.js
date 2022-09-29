
'use strict';

// const a = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// 배열은 저장이 목적.

const a = new Array(20);

// a의 0번째 값 <= 5부터 24 집어 넣기

for (let i = 0; i < a.length; i++){
    a[i] = i + 5;
}

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
