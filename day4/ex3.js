
'use strict';

const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar3 = [11, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar4 = [12, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar5 = [13, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// 중첩루프 

for (let i = 1; i <= 5; i++) {
    document.write(`ar${i} 배열 :`);
    for (let j = 0, t; j < ar1.length; j++) { // index 0부터 시작.
        switch (i) {
            case 1:
                t = ar1;
                break;
            case 2:
                t = ar2;
                break;
            case 3:
                t = ar3;
                break;
            case 4:
                t = ar4;
                break;
            case 5:
                t = ar5;
                break;
            }
        document.write(`${t[j]} `);
    }
    document.write(`<br/>`); // 하나의 배열이 끝날 때 마다 줄바꿈.
}