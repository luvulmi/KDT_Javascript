'use strict';

const a = new Array(5);
for (let i = 0; i < a.length; i++) {
  a[i] = new Array(5);
}

// 원본 배열 숫자 배치
for (let i = a.length - 1, v = 1; i >= 0; i--) {
  for (let j = a.length - 1; j >= a.length - 1 - i; j--) {
    a[i][j] = v++;
  }
}

// 임시 배열 생성
const temp = new Array(5);
for (let i = 0; i < temp.length; i++) {
  temp[i] = new Array(5);
}


let n = +prompt('회전 수 입력') % 4;


for (let k = 0; k < n; k++) { // 입력받은 수(%4)로 회전 (1 = 90도 2 = 180도 3 = 270도 ...)
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= 0; j--) {
      temp[j][a.length - 1 - i] = a[i][j];
    }
  }
  // 원본 배열 읽는 구조 > 임시 배열 저장구조
  // 90도를 돌리는 역할.

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      a[i][j] = temp[i][j];
    }
  }
  // 원본 배열에 돌린 임시 배열 저장하는 식.
}
// 

// 출력 구조
for (let i = 0, ed; i < a.length; i++) { // 행
  switch (n) {
    case 1:
        ed = i;
        break;
    case 2:
        ed = a.length - 1 - i;
        break;
    case 3:
        ed = a.length - 1;
        break;
    case 0:
  }

  for (let j = 0, av; j <= ed; j++) { // 열
    // 공백 출력 조건
    if ( n === 0 && j < a.length-1-i || n === 3 && j < i) {
      document.write('&nbsp;&nbsp; ')
    } else {
      av = a[i][j];
      document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
    }

  }
  document.write('<br/>');
}