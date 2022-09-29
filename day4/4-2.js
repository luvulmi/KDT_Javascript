'use strict';

const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar2 = [10, 9, 8, 7, 6, 5];
const ar3 = [11, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar4 = [12, 9, 8, 7, 6, 5, 4,];
const ar5 = [13, 9,];

const ar = [ar1, ar2, ar3, ar4, ar5]; // 2차원 배열 선언.


for (let i = 0; i < ar.length; i++) { // 2차원 배열 인덱스.
    document.write(`ar${i+1} 배열 :`);
    for (let j = 0; j < ar[i].length; j++) { // 1차원 배열 인덱스. 범위는 ar[i].length
        document.write(`${ar[i][j]} `);
    }
    document.write(`<br/>`); // 하나의 배열이 끝날 때 마다 줄바꿈.
}