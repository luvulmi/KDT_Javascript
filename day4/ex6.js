'use strict';

// 5개의 값
const a = new Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}

for (let i = 4, v = 1; i >= 0; i--) {
    for (let j = 4; j >= 4 - i; j--) {
        a[i][j] = v++;
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0, av; j < 5; j++) { // 출력하는 식은 행,열 고정 
        av = a[i][j];
        if (j < 4 - i) {
            document.write('&nbsp; &nbsp;');
        } else {
            document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
        }
    }
    document.write('<br/>');
}