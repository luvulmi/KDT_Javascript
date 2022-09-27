'use strict';

// 1. 변수 선언
// 2. 조건 분석
// 3. 반복
// 회전 수가 결정 안됐다고 무한루프...?
// 종료시점이 중간 or 회전 수 결정 안됐을 때 무한루프

// 반복문 간략 개념
// for문 = while문 의미상 같음.
// for문 : 초기식, 증감식, 조건식이 안에 있음.
// while문 : 기본적으로 초기식이 바깥에 있음.
// do while문 실행 후 조건 체크

let first, second;
let tot = 0;

do {
    first = +prompt('정수1:');
    second = +prompt('정수2:');
} while (first > second);
// 반복문의 조건식 : 해당 조건식 만족 시 반복 <> if break문 조건식
// 비정상 조건일 때 반복이 되어야함!

// 누적합
for (let i = first; i <= second; i++) {
    tot += i;
}
alert(`${first}부터 ${second}까지의 합 : ${tot}`);



