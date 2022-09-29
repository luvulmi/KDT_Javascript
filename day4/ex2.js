
'use strict';

// 교환을 이용한 풀이

const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


for (let i = 0, t; i < ar1.length; i++) { // t라는 빈 지역변수를 생성하여 교환.
    t = ar1[i];
    ar1[i] = ar2[i];
    ar2[i] = t;
}

document.write(`ar1 배열 : `) // console로 출력 시에는 줄바꿈이 일어나므로 document 사용.
for (let i = 0; i < ar1.length; i++) {
    document.write(`${(ar1[i] / 10 < 1 ? "&nbsp;" : "") + ar1[i]} `);
}

document.write(`<br/> ar2 배열 : `)
for (let i = 0; i < ar2.length; i++) {
    document.write(`${(ar2[i] / 10 < 1 ? "&nbsp;" : "") + ar2[i]} `);
}





