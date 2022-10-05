
'use strict';

const a = new Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}

let s = 5;
let r = 5, c = 0;
let v = 1;
let f = -1; // 최초 감소

for (; ;) {
    for (let i = 0; i < s; i++) a[r += f][c] = v++; // 열 고정이 우선
    f = -f; // 감소 먼저 일어남

    if (--s <= 0) break; // 종료시점 변화 없음

    for (let i = 0; i < s; i++) a[r][c += f] = v++;

}

for (let i = 0, av; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        av = a[i][j];
        document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
    }
    document.write('<br/>');
}