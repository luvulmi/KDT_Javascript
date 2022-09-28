'use strict';

// 0 ~ 100까지의 범위에서 5개의 점수를 입력받아 최댓값, 최솟값 구하기.

let min = 100; // 과거 최솟값 = 범위에서의 최댓값
let max = 0; // 과거 최댓값 = 범위에서의 최솟값
let score;

for (let i = 1; i <= 5; i++) {
    score = +prompt(`점수${i} : `);

    if (score > max) max = score;
    if (score < min) min = score;
}

alert(`최댓값 : ${max}, 최솟값: ${min}`);
