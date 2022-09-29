
'use strict';

const a = new Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5); // a에 index 생성.
}

// 배열 저장.
for (let i = 0, v = 1; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        a[i][j] = v++;
    }
}

// 배열 출력.
for (let i = 0, v = 1; i < a.length; i++) {
    for (let j = 0, av; j <a[i].length; j++) {
        av = a[i][j];
        document.write(` ${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
    }
    document.write('<br/>');
}

