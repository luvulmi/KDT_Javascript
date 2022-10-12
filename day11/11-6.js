
'use strict';

function calculator(num1, num2, cal) {
    let result = 0;

    switch (cal) {
        case '+':
            result = num1 + num2;
            break; // return을 사용하지 않을 경우 break 필요.
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    console.log(result);
}

calculator(10, 3, '+');
calculator(10, 3, '-');
calculator(10, 3, '*');
calculator(10, 3, '/');


// 함수 선언에 대한 참조 전달.
// 재사용 가능.

// function sum(num1, num2) {
//     return num1 + num2;
// }
// function sub(num1, num2) {
//     return num1 - num2;
// }
// function mul(num1, num2) {
//     return num1 * num2;
// }
// function dive(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, op) {
//     console.log(op(num1, num2));
// }

// calculator(10, 3, sum);
// calculator(10, 3, sub);
// calculator(10, 3, mul);
// calculator(10, 3, dive);

// // 함수 표현식에 대한 참조 전달.
// // 일회성.

// calculator(10, 3, function (n1, n2){
//     return n1 + n2;
// });
// calculator(10, 3, function (n1, n2){
//     return n1 - n2;
// });
// calculator(10, 3, function (n1, n2){
//     return n1 * n2;
// });
// calculator(10, 3, function (n1, n2){
//     return n1 / n2;
// });

// // 람다식 버전.

// calculator(10, 3, (n1, n2) => n1 + n2);
// calculator(10, 3, (n1, n2) => n1 - n2);
// calculator(10, 3, (n1, n2) => n1 * n2);
// calculator(10, 3, (n1, n2) => n1 / n2);



