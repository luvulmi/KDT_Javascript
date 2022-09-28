'use strict';

let max = 0, min = 100;
let stNum;
let sc;

stNum = +prompt('학생 수 : ');

for (let i = 0; i < stNum; i++) {
    sc = +prompt('점수 :');

    max = Math.max(sc, max); // 최댓값을 구하는 메서드. 인수는 무한으로 넣을 수 있음.
    min = Math.min(sc, min);
}

alert(`최댓값 : ${max}, 최솟값 : ${min}`);