'use strict';

// 삼항연산자

let input = 10;
let n1, n2;

input % 5 == 0 ? n1 = input + 1 : n2 = input + 2;

console.log(n1, n2);


// switch문
'use strict';

let input = 2;
let n1 = 1, n2 = 2;

switch (input) {
    case n1:
        console.log(input + 1);
        break;
    case n2:
        console.log(input + 2);
        break;
    default:
        console.log('예외');
}

// for문
// js에서는 0을 제외한 숫자는 true로 평가.
		for (초기식; 조건식(반복); 증감식) { // 초기식 > 조건식 > 반복 실행 블럭 > 증감식
			반복 실행 블럭;				//		  조건식 > 반복 실행 블럭 > 증감식
		} 
>>>>>>> 조건식은 항상 미래 !!

// 110 ~ 65
for (let i = 111;1;) {           // 초기식은 과거
    if (i <= 66) break;
    i--;
    console.log(i);             // 구하는 식이 기준 - 현재!!!
}


// 9~19
// for (let i = 8; i <= 18;){
//     i++;
//     console.log(i);
// }

// for (let i = 9; i <= 19;){
//     console.log(i);
//     i++;
// }

// for (let i = 8;;){
//     i++;
//     console.log(i);
//     if (i > 18) break; 
// }

// for (let i = 9;;){
//     if (i > 19) break; 
//     console.log(i);
//     i++;
// }

// for (let i = 8;;){
//     if (i > 18) break; 
//     i++;
//     console.log(i);
// }

// for (let i = 8;;){
//     i++;
//     if (i > 19) break; 
//     console.log(i);
// }

// -2 ~ -5
// for (let i=-1;;){
//     i--;
//     if (i < -5) break;
//     console.log(i);
// }

// for (let i=-2;;){
//     console.log(i);
//     if (i <= -5) break;
//     i--;
// }

// // 5 ~ 1
// for (let i = 5;;){
//     i--;
//     console.log(i);
//     if (i <= 1) break;
// }

// 11 ~ 27
// for (let i = 10;i <= 26;){
//     i++;
//     console.log(i);
// }
// 조건식을 만족하지 않으면 끝남. 종료시점.

// // 5 ~ 1
// for (let i = 5;;){
//     i--;
//     console.log(i);
//     if (i <= 1) break;
// }
// 용어정리. 

// 11~27
let i = 11; // 과거

while (i < 28){ // 현재
    console.log(i); // 현재
    i++;
}

while (1) {
    if (i >= 27) break;
    i++;
    console.log(i);
}

do {
    console.log(i);
    i++;
} while (i < 28);
