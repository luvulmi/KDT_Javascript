'use strict';

const a = new Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}


for (let i = a.length - 1, v = 1; i >= 0; i--) { // 확장성을 위해 정수 > 배열크기로 연관지어 분석
    for (let j = a.length - 1; j >= a.length - 1 - i; j--) {
        a[i][j] = v++;
    }
}

// 새로 저장할 임시 배열 생성
const b = new Array(5);
for (let i = 0; i < b.length; i++) {
    b[i] = new Array(5);
}

for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= 0; j--) {
        b[4 - i][4 - j] = a[i][j];
    }
}

// 배열 a에 배열 b를 복사
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        a[i][j] = b[i][j];
    }
}

// 출력 구조
for (let i = 0; i < a.length; i++) {
    for (let j = 0, av; j < a.length - i - 1; j++) { // 열은 4 - 행 값까지 출력되게 범위 지정.
        av = a[i][j];
            document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `); // 공백 출력은 안해도 되는 구조.
        
    }
    document.write('<br/>');
}