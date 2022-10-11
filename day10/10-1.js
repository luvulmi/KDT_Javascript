'use strict';

// 함수 : 복잡하거나 반복되는 로직을 하나의 명령어로 간단히 실행 가능한 프레임.
// 함수 형식: function 함수명 ( 매개변수 ) { 함수 실행 블럭 }
//                                입력          처리
//             return : 출력
// 함수에서 return문 없으면 undefined
// function sum(n1, n2) {
//     return n1 + n2;
// }

// console.log(sum(5, 6)); // 전달하는 값 : 실인수.

// 응용 ver.

// function fromToSum() {
//     let tot = 0;
//     let min, max;

//     min = 1;  // 입력
//     max = 10;

//     for (let i = min; i <= max; i++){
//         tot += i;                       // 처리
//     } 

//     console.log(` ${min}부터 ${max}까지 누적합 : ${tot}\n`); // 출력
// }

// fromToSum(); // 호출
// fromToSum();
// // 함수 안에 입력, 처리, 출력 다 있으므로 호출만 하면 출력값 반환.

function fromToSum() { // 지역변수에 해당. // 함수 선언 시 매개변수 선언하면 호출 시에 매개변수 선언을 해야됨.
    let tot = 0;
    
    for (let i = min; i <= max; i++){
        tot += i;                       
    } 

    return tot; // 의미 1) 호출부로 우변값을 반환. 2) 함수의 종료.
}

let min, max; // 전역변수에 해당.

min = 1; 
max = 10;

fromToSum();
console.log(` ${min}부터 ${max}까지 누적합 : ${fromToSum(min, max)}\n`);
