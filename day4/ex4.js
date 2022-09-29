
'use strict';

const a = new Array(5);
let min = 100, max = 0; // a[0]은 저장되어 있는 값이 없으므로 의미없음.
let tot = 0;

// 1. 배열 입력
for (let i = 0; i < a.length; i++) {
    a[i] = +prompt(`배열의 ${i+1}번째 요소 입력 : `);

    // 입력 받고 바로 판정
    if (a[i] > max) max = a[i];
    if (a[i] < min) min = a[i];
    
    tot += a[i]; 
}

// 2. 입력받은 배열 출력
for (let i = 0; i < a.length; i++) {
    document.write(`배열 ${i+1}번째 : ${a[i] + (i <= 3 ? ', ' : '' )}`);
}

document.write(`<br/><br/> 입력된 정수 중 최대값 : ${max}`);
document.write(`<br/> 입력된 정수 중 최소값 : ${min}`);
document.write(`<br/> 입력된 정수 총합 : ${tot}`);