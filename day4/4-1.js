
// 저장 구조와 출력 구조 따로 구성하여야 함.

'use strict';

const a = new Array(5);

for(let i=0; i < a.length; i++) {
    a[i] = i + 1;
}
// 저장 구조 먼저 진행.

for(let i=0; i < a.length; i++) {
    console.log(a[i]);
}
// 저장 후 출력.
