'use strict';

// 정수를 입력받았을 때 회전시켜서 출력 1=90도 2=180도 3=270도 4=제자리 5=90도 ...
// 원본 배열은 저장되어 있음 > 회전만 시키기

let input = +prompt('몇번 돌릴까?: ') % 4;
let option;

// 1차원 배열 생성
const a = new Array(5);

// 2차원 배열 생성
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}

// 원본 배열 숫자 배치
for (let i = a.length - 1, v = 1; i >= 0; i--) {
    for (let j = a[i].length - 1; j >= a.length - 1 - i; j--) { 
        // a[i]로 입력 > 배열크기가 다를 수 있으므로 
        a[i][j] = v++;
    }
}

// 임시 배열 생성
const t = new Array(5);
for (let i = 0; i < a.length; i++) {
    t[i] = new Array(5);
}

// 원본 배열의 구조를 이용하여 임시배열에 회전한 값 할당 switch문 
for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= a.length - 1 - i; j--) {
        switch (input) {
            case 0: 
                t[i][j] = a[i][j]; // case 0 = default 값.
            case 1: // 90도
                t[j][a.length - 1 - i] = a[i][j]; 
                break;
            case 2: // 180도
                t[a.length - 1 - i][a.length - 1 - j] = a[i][j];
                break;
            case 3: // 270도
                t[a.length - 1 - i][j] = a[i][j];
                break;
        }
    }
}

// 공백 출력 조건 switch문
for (let i = 0; i < t.length; i++) {
    for (let j = 0, av; j < t[i].length; j++) {
        switch (input) {
            case 1: // 90도
                option = j > i;
                break;
            case 2: // 180도
                option = j >= a.length - i;
                break;
            case 3: // 270도
                option = j < i;
                break;
            default:
                option = j < a.length - 1 - i; 
        }

        if (option) {
            document.write('&nbsp; &nbsp;');
        } else {
            av = t[i][j];
            document.write(`${(av / 10 < 1 ? '&nbsp;&nbsp;' : '&nbsp;') + av}`);
        }
    }
    document.write('<br/>');
}

// 공백 출력 switch문 안쓰기 ver.
for (let row = 0; row < a.length; row++) {
    for (let col = 0, av; col < a.length; col++) {
        av = temp[row][col];
        if (av == undefined) {
            document.write(`&nbsp;&nbsp;`);
        } else {
            document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
        }
    }
    document.write('<br\>');
}
