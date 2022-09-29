'use strict';

const a = new Array(5); // 행 값
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(4); // 열 값
}

// 고정되는 값, 변화하는 값 파악.
// 값> 행 변화 열 고정.
for (let j = 3, v = 1; j >= 0; j--) {
    for (let i = 4; i >= 0; i--) {
        a[i][j] = v++;
    }
}

for (let i = 0, v = 1; i < a.length; i++) {
    for (let j = 0, av; j <a[i].length; j++) { // 출력하는 식은 행,열 고정 
        av = a[i][j];
        document.write(` ${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
    }
    document.write('<br/>');
}