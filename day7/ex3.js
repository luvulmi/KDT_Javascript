'use strict';
let num1, num2, sum;

for (; ;) {

    num1 = +prompt('정수1:');
    num2 = +prompt('정수2:');
    sum = num1 + num2;

    if (!isNaN(sum)) {
        alert(`${num1} + ${num2} = ${sum}`); // 종료조건에 해당하는 식
        break;
    }
    alert('둘 중 하나 숫자 아님');
}